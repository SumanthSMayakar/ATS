const Visitor = require('../model/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createAccessToken } = require('../util/token');   //access the token from util file


const authController = {
  register: async (req, res) => {
    // res.json({ msg: "register" });
    try {
        const { firstname , lastname , email, mobile, password, address } = req.body;

        const encPass = await bcrypt.hash(password, 10); //10bit encyption 

        const newVisitor = await Visitor.create({
            firstname,
            lastname,
            mobile,
            email,
            password : encPass,
            address
        })
        res.json({ msg : "User registered Successfully", visitor : newVisitor })
        // res.json({ data : req.body })
    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
  },
  login: async (req, res) => {
    // res.json({msg : 'login'})
    try {
      const { email, password } = req.body

      // res.json({ data : req.body})

      let extVisitor = await Visitor.findOne({ email });
      if(!extVisitor)
        return res.status(400).json({ msg : "Users doesn't exists. "})

      const isMatch = await bcrypt.compare(password, extVisitor.password)
      if(!isMatch)
        return res.status(400).json({ msg : "password doesn't match. "})
      
      // check visitor active or not 
      if(!extVisitor.isActive)
        return res.status(400).json({ msg : "Sorry, your account is blocked , contact admin" })
      
      const accessToken = createAccessToken({ _id : extVisitor._id})

      res.cookie("accessToken", accessToken, {
        httpOnly : true,
        signed : true,
        path: `/api/v1/auth/authToken`,
        maxAge : 1 * 24 * 60 * 60 * 1000   //1day 
      })
      res.json({ token : accessToken, msg : "login Successfully "})

    } catch (err) {
      return res.status(500).json({ msg : err.message })
    }
  },
  resetpass: async (req, res) => {
    try {
      res.json({ msg : "resetPass called "})
    } catch (err) {
      return res.status(500).json({ msg : err.message })
    }
  },
  logout: async (req, res) => {
    // res.json({msg : 'logout'})
      try {
          res.clearCookie("accessToken", { path : `/api/v1/auth/authToken`})
          res.status(200).json({ msg : "logout successfully.."})
      } catch (err) {
          return res.status(500).json({ msg : err.message })
      }
  },
  authToken: async (req, res) => {
    try {
    
      const token = req.signedCookies.accessToken //signed cookie => secured cookie
      // res.json({ token });
      if (!token)
        return res.status(400).json({ msg: "Session Expired... Login Again.." });

      // reverse login to validate the userid
      jwt.verify(token, process.env.ACCESS_SECRET, (err,data) => {
        if (err) 
          return res.status(400).json({ msg: "Invalid Access Token.." });
        // regenerate access data
        const accessToken = createAccessToken({ _id : data._id})
        res.json({ accessToken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  currentUser : async (req, res)=>{
    try {
        const cUser = await Visitor.findById({ _id : req.user})
        res.json({ user : cUser})
    } catch (err) {
        return res.status(500).json({ msg : err.message})
    }
  }

};

module.exports = authController
