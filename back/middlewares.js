const jwt = require("jsonwebtoken");

module.exports = {
  logger: (request, _, next) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const data = `${hour}:${minutes}:${seconds} ${request.method} ${
      request.url
    } ${request.get("user-agent")}`;
    console.log(data);
    next();
  },
  checkAuth: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(403).json({ message: "Пользователь не авторизован" });
      }

      const decodedData = jwt.verify(token, process.env.SECRET_JWT);

      req.user = decodedData;

      next();
    } catch (error) {
      console.log(error);

      return res.status(403).json({ message: "Пользователь не авторизован" });
    }
  },
};
