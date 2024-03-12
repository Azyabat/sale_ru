const db = require("../db");

class StorageController {
  async getProducts(req, res) {
    const userId = req.user.id;
    try {
      const products = await db.query(
        `SELECT * FROM "storage" where owner=$1 ORDER BY name`,
        [userId]
      );

      res.status(200).json(products.rows);
    } catch (error) {
      res.status(400);
    }
  }

  async addProduct(req, res) {
    const userId = req.user.id;
    const { name, count, buy, sale } = req.body;
    try {
      await db.query(
        `INSERT INTO "storage" (name, count, buy, sale, owner) values ($1, $2, $3, $4, $5) RETURNING *`,
        [name, count, buy, sale, userId]
      );

      res.status(200).json();
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async augmentProduct(req, res) {
    const { id, count } = req.body;

    try {
      await db.query(
        `UPDATE "storage" SET count = count + ${count} where id=$1`,
        [id]
      );

      res.status(200).json();
    } catch (error) {
      res.status(200).json({ message: "Не удалось прибавить" });
    }
  }

  async subtractProduct(req, res) {
    const { id, count } = req.body;

    try {
      const selectedProduct = await db
        .query(`SELECT * FROM "storage" where id=$1`, [id])
        .then((val) => val.rows?.[0]);

      if (!selectedProduct || selectedProduct.count < count) {
        throw new Error("Некорректное значение count");
      }

      await db.query(
        `UPDATE "storage" SET count = count - ${count} where id=$1`,
        [id]
      );

      res.status(200).json();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    const userId = req.user.id;
    const { id } = req.body;

    try {
      const selectedProduct = await db
        .query(`SELECT * FROM "storage" where id=$1`, [id])
        .then((val) => val.rows?.[0]);

      if (!selectedProduct) {
        res.status(400).json({ message: "Нет продукта с таким id" });
      }

      if (selectedProduct.owner !== userId) {
        res.status(400).json({ message: "Не является владельцем продукта" });
      }

      await db.query(`DELETE FROM "storage" where id=$1`, [id]);

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
