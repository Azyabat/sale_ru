const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateAccessToken = (id, userName) => {
  const payload = {
    id,
    userName,
  };

  return jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: "1h" });
};

class AuthController {
  async registration(req, res) {
    try {
      const { password, userName } = req.body;
      const candidate = await db.query('SELECT * FROM "user" where name=$1', [
        userName,
      ]);

      if (candidate.rows.length > 0) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }

      const hashPassword = bcrypt.hashSync(password, 8);

      const newPerson = await db
        .query(
          'INSERT INTO "user" (name, password) values ($1, $2) RETURNING *',
          [userName, hashPassword]
        )
        .then((r) => r.rows[0]);

      delete newPerson.password;

      res.status(200);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Ошибка регистрации" });
    }
  }

  async login(req, res) {
    try {
      const { userName, password } = req.body;
      const user = await db
        .query('SELECT * FROM "user" where name=$1', [userName])
        .then((r) => r.rows);

      if (user.length === 0) {
        return res
          .status(400)
          .json({ message: `Пользователь ${userName} не найден` });
      }

      const validPassword = bcrypt.compareSync(password, user[0].password);

      if (!validPassword) {
        return res.status(400).json({ message: `Введен неверный пароль` });
      }

      const token = generateAccessToken(user[0].id, user[0].userName);

      return res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Ошибка авторизации" });
    }
  }
}

module.exports = new AuthController();
