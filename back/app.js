const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/Auth");
const middlewares = require("./middlewares");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(middlewares.logger);

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
