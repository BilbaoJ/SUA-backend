const jwtService = require('../services/jwt.service');
const mongodbService = require('../services/mongodb.service');
const service = new mongodbService();

const login = async (req, res) => {
  let response = {};
  try {
    const data = req.body;
    const user = await service.readDocument('users', { email: data.email });
    if (user) {
      if (data.password === user.password) {
        delete user.email;
        delete user.password;
        const token = jwtService.createToken(user);
        response.ok = true;
        response.message = "Welcome";
        response.info = { ...user, token };
        res.send(response);
      } else {
        response.ok = false;
        response.message = "Invalid username or password";
        response.info = null;
        res.status(401).send(response);
      }
    } else {
      response.ok = false;
      response.message = "invalid username or password";
      response.info = null;
      res.status(401).send(response);
    }
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred while logging in";
    response.info = error;
    res.status(500).send(response);
  }
}

module.exports = {
  login
}
