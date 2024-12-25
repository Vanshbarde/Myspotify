
const jwt = require('jsonwebtoken'); // Corrected to 'jsonwebtoken'exports = {}

exports. getToken = async (email, user) => {

    const token = jwt.sign({identifiers: User._id});
    return token;
};


module.exports = exports;
