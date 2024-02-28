const db = require("../db");

class StorageController {
  async getProducts(req, res) {
    const userId = req.user.id;
    try {
      const products = await db.query(
        `SELECT * FROM "storage" where owner=$1`,
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
}

module.exports = new StorageController();
