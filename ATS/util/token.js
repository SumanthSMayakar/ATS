const jwt = require('jsonwebtoken')

// access token for each individual user at the time of login

// token = userid + expiry time + secret key

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn : '1d'})
}

module.exports = { createAccessToken }