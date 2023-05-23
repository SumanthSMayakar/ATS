const User = require('../model/UserModel')

const adminAuth = async (req,res,next)=>{
    try{
        const id = req.user 

        const extUser = await User.findById({ _id : id})

        // validate user 
        if(extUser.role !== 'superadmin')
            return res.status(400).json({ msg : 'Access Denied for non-admin users.'})
            
        next()
    }
    catch(err){
        return res.status(500).json({ msg : err.message})
    }
}

module.exports = adminAuth