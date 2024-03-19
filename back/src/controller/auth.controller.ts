import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users } from "../models/users.js";

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
      const candidate = await Users.findOne({ where: { name: userName } });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }

      const hashPassword = bcrypt.hashSync(password, 8);

      await Users.create({
        name: userName,
        password: hashPassword,
      });

      res.status(200).json();
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Ошибка регистрации" });
    }
  }

  async login(req, res) {
    try {
      const { userName, password } = req.body;
      const user = await Users.findOne({ where: { name: userName } });

      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь ${userName} не найден` });
      }

      const validPassword = bcrypt.compareSync(
        password,
        user.dataValues.password
      );

      if (!validPassword) {
        return res.status(400).json({ message: `Введен неверный пароль` });
      }

      const token = generateAccessToken(
        user.dataValues.id,
        user.dataValues.name
      );

      return res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Ошибка авторизации" });
    }
  }
}

export default new AuthController();
