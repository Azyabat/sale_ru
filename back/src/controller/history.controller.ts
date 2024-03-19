import { History } from "../models/history.js";
import { Storage } from "../models/storage.js";
import { Users } from "../models/users.js";

class HistoryController {
  async getHistory(req, res) {
    const userId = req.user.id;
    try {
      const result = await History.findAll({
        include: [
          { model: Users, attributes: ["name"], as: "user" },
          { model: Storage, attributes: ["name"], as: "product" },
        ],
        where: { user_owner: userId },
        attributes: [
          "amount",
          "count",
          "createdAt",
          "id",
          "operation_type",
          "price",
        ],
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json();
    }
  }
}

export default new HistoryController();
