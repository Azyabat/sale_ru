import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../db.js";
import { HistoryOperationType } from "../consts/history.js";
import { Users } from "./users.js";
import { Storage } from "./storage.js";

type HistoryAttributes = {
  id: number;
  product_id: number;
  user_owner: number;
  count: number;
  amount: number;
  createdAt: string;
  operation_type: HistoryOperationType;
};

type HistoryCreationAttributes = Optional<
  HistoryAttributes,
  "id" | "createdAt"
>;

interface HistoryModel
  extends Model<HistoryAttributes, HistoryCreationAttributes> {}

export const History = db.define<HistoryModel>(
  "history",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    count: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    operation_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: true, createdAt: true, updatedAt: false }
);

History.hasOne(Users, {
  foreignKey: "id",
  sourceKey: "user_owner",
  as: "user",
});

History.hasOne(Storage, {
  foreignKey: "id",
  sourceKey: "product_id",
  as: "product",
});
