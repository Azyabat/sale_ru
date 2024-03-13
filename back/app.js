const express = require("express");
const cors = require("cors");

const db = require("./db.js");
const authRouter = require("./routes/Auth");
const userRouter = require("./routes/User");
const storageRouter = require("./routes/Storage");
const middlewares = require("./middlewares");

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
