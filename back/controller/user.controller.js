const Users = require("../models/users");
const Storage = require("../models/storage");

class UserController {
  async getProfile(req, res) {
    const userId = req.user.id;

    try {
      const user = await Users.findOne({
        attributes: ["id", "name"],
        where: { id: userId },
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: "Ошибка сервера" });
    }
  }
}

module.exports = new UserController();
