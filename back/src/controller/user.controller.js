import { Users } from "../models/users.js";

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

export default new UserController();
