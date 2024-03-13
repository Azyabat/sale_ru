const { DataTypes } = require("sequelize");
const Users = require("./users");
const db = require("../db");

const Storage = db.define(
  "storage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: { type: DataTypes.FLOAT, allowNull: false },
    buy: { type: DataTypes.FLOAT, allowNull: false },
    sale: { type: DataTypes.FLOAT, allowNull: false },
    owner: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

Storage.hasOne(Users, { foreignKey: "id", sourceKey: "owner", as: "userInfo" });

module.exports = Storage;
