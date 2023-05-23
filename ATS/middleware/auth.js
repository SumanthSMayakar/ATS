const jwt = require('jsonwebtoken')
// auth middleware read the user id from token (cookies)


const CurrentAuth = async (req, res, next)=>{
    try {
        const token = req.header('Authorization'); //auth header (auth 2.0)

        if(!token) return res.status(400).json({ msg : 'Session expired.. Login Again..'})
        
        // reverse logic to validate the user_id
        jwt.verify(token, process.env.ACCESS_SECRET, (err, data)=>{
            //err => server error, data=> output response
            if(err)
                return res.status(400).json({ msg : "Invalid Access Token..."})
             //user id assign 
             req.user = data._id;
             next();
        })
    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
}

module.exports = CurrentAuth;