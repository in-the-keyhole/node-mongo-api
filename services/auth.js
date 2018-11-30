const jwt = require('jsonwebtoken');
const config = require('../config');


module.exports = {
    sign(user){
        return jwt.sign(user, config.secret);
    },
    

}