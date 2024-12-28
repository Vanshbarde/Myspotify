const jwt = require('jsonwebtoken');

const getToken = async (email, user) => {
  const token = jwt.sign({ id: user._id, email }, 'your_jwt_secret_key', { expiresIn: '1h' });
  return token;
};

module.exports = { getToken };
