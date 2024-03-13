const db = require("../db");
const Storage = require("../models/storage");
const Users = require("../models/users");

class StorageController {
  async getProducts(req, res) {
    const userId = req.user.id;
    try {
      const products = await Storage.findAll({
        include: [{ model: Users, as: "userInfo", attributes: ["name"] }],
        where: { owner: userId },
        order: [["name", "ASC"]],
      });

      res.status(200).json(products);
    } catch (error) {
      res.status(400);
    }
  }

  async addProduct(req, res) {
    const userId = req.user.id;
    const { name, count, buy, sale } = req.body;
    try {
      await Storage.create({ name, count, buy, sale, owner: userId });

      res.status(200).json();
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async augmentProduct(req, res) {
    const { id, count } = req.body;

    try {
      await Storage.increment({ count: +count }, { where: { id: id } });

      res.status(200).json();
    } catch (error) {
      res.status(400).json({ message: "Не удалось прибавить" });
    }
  }

  async subtractProduct(req, res) {
    const { id, count } = req.body;

    try {
      const selectedProduct = await Storage.findOne({ where: { id: id } });

      if (!selectedProduct || selectedProduct.count < count) {
        throw new Error("Некорректное значение count");
      }

      await Storage.decrement("count", { by: count, where: { id: id } });

      res.status(200).json();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    const userId = req.user.id;
    const { id } = req.body;

    try {
      const selectedProduct = await Storage.findOne({ where: { id: id } });

      if (!selectedProduct) {
        res.status(400).json({ message: "Нет продукта с таким id" });
      }

      if (selectedProduct.owner !== userId) {
        res.status(400).json({ message: "Не является владельцем продукта" });
      }

      await Storage.destroy({ where: { id: id } });

      res.status(200).json();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getTest(req, res) {
    try {
      const result = await db
        .query(
          `SELECT * FROM public.history
        JOIN public.storage ON public.history.product_id=public.storage.id
        JOIN public.user ON public.history.user_owner=public.user.id`
        )
        .then((val) => val.rows);

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json();
    }
  }
}

module.exports = new StorageController();
