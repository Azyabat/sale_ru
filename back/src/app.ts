import express from "express";
import cors from "cors";
import { db } from "./db.js";
import middlewares from "./middlewares.js";
import storageRouter from "./routes/Storage.js";

import authRouter from "./routes/Auth.js";
import userRouter from "./routes/User.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(middlewares.logger);

app.use("/auth", authRouter);

app.use("/user", userRouter);

app.use("/storage", storageRouter);

db.authenticate().catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
