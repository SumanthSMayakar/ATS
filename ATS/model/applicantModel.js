const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({

   
    name:{
        type:String,
        required:[true,"Name field must be filled"],
        trim:true
    },
    jobTitle:{
        type:String,
        required:true,
        trim:true
    },
    stage:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        required:[true,"email field must be filled"],
        trim:true,
        unique:[true,"email is already exists"]
    },
 
    mobile:{
        type:String,
        required:[true,"mobile field must be filled"],
        trim:true,
        unique:[true,"mobile No already exists"]
    },
    address:{
        type:Array,
        default:[]
    },
     rating:{
        type:String,
        trim:true
    },
    salary:{
        type:String,
        trim:true
        
    },
    loacation:{
        type:String,
        trim:true
    },
    noticePeriod:{
        type:String,
        required : true,
        trim:true
    },
    file:{
        fileName: String,
        path: String
       
    },
    desc : {
        type : String,
        required : true,
        trim : true
    },
    feeddesc:{
        type : String,
        trim : true
    }
   
},{
    collection:'Applicants',
    timestamps:true
})

module.exports =mongoose.model('Applicants',userSchema)