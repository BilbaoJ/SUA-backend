const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const TOKEN_EXPIRATION  = '5m';


const createToken = (payload) => {
    const token = jwt.sign(payload, PRIVATE_KEY, { expiresIn: TOKEN_EXPIRATION });
    return token;
}

const verifyToken = (token) => {
    try {
        return Object.keys(jwt.verify(token, PRIVATE_KEY)).length > 0;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return false;
    }
}

module.exports = {
  createToken,
  verifyToken
}
