const { verifyToken } = require("../services/jwt.service");

const requestValid = (req, res, next) => {
  try {
    const token = req.headers.token;
    if (token) {
      const tokenIsValid = verifyToken(token);
      if (tokenIsValid === true) {
        next();
      } else {
        return res.status(401).send({ ok: false, info: null, message: "Invalid token" });
      }
    } else {
      return res.status(400).send({ ok: false, info: null, message: "Token not found" });
    }
  } catch (error) {
    return res.status(401).send({ ok: false, info: error.message, message: "Unauthenticated user." });
  }
}

module.exports = { requestValid }
