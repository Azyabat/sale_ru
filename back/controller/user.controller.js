const db = require("../db");

class UserController {
  async getProfile(req, res) {
    const userId = req.user.id;

    try {
      const user = (
        await db.query('SELECT * FROM "user" where id=$1', [userId])
      ).rows[0];

      delete user.password;

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: "Ошибка сервера" });
    }
  }
}

module.exports = new UserController();
