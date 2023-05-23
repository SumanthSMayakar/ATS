const User = require('../model/applicantModel')
const jwt =require('jsonwebtoken')
const bcrypt =require('bcryptjs')
const {createAccessToken}= require('../util/token')


const authController ={
    createApplicant: async (req,res)=>{
        try{
            const {name,jobTitle,stage,email,mobile,address,rating,salary,location,noticePeriod,files,desc,feeddesc}=req.body
            let fileInfos = [];
            //creating new user in db
            let Applicant = new User({name,jobTitle,stage,email,mobile,address,rating,salary,location,noticePeriod,files,desc,feeddesc});
            Applicant.save()
            res.send({msg:"user registreted successfully",Applicant})

            for (const file of files) {
                let fileInfo = new File({
                    fileName: file.filename,
                    path: file.path
                });
                fileInfos.push(fileInfo);
            }
    
            File.insertMany(fileInfos, function(err, files) {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(200).send({ message: "Files uploaded successfully!", files: files });
            });
        }catch(err){
            return res.status(500).json({msg: "user already exist"})
        }
    },

    authToken:async(req,res)=>{
        try{
            const token =req.signedCookies.accessToken;//signed cookies =>secured cookies
            if(!token)
             return res.status(400).json({msg:"Session Expired.. Login Again.."})
             //reverse logic to validate the user id
            jwt.verify(token, process.env.ACCESS_SECRET,(err,data)=>{
                // err=>server error, data=>output response 
                if(err) return res.status(400).json({msg:"invalid Access Token..."})

                //regenerate access token
                const accessToken=createAccessToken({_id: data._id})
                res.json({accessToken})
            })
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    allApplicant:async(req,res)=>{
        try{
            
            const Applicants = await User.find()
            res.json(Applicants)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    singleUser : async (req, res) => {
        try {
            let id = req.params.id;
           User.findById(id ,function(err,result){
            if (err) throw err;
            res.json(result)
        }); 
           
         
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
    deleteApplicant
    :async(req,res)=>{
        try {
            const applicant = await User.findByIdAndDelete(req.params.id);
        
            if (!applicant) {
              return res.status(404).send();
            }
        
            res.send(applicant);
          } catch (error) {
            res.status(500).send(error);
          }
        },
currentApplicant
    :async(req,res)=>{
        try {
            const applicant = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.send(applicant);
          } catch (error) {
            console.error(error);
            res.status(500).send(error);
          }
        },
        
    }
    

module.exports=authController