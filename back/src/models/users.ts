import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../db.js";

type UserAttributes = {
  id: number;
  name: string;
  password: string;
};

type UserCreationAttributes = Optional<UserAttributes, "id">;

interface UserModel extends Model<UserAttributes, UserCreationAttributes> {}

export const Users = db.define<UserModel>(
  "user",
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
      unique: true,
    },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: false }
);
