const mongoose = require('mongoose')

const JobModel = new mongoose.Schema({
    jobid : {
        type : String,
        required : true,
        trim : true
    },
    companyname : {
        type : String,
        required : true,
        trim : true
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    desc : {
        type : String,
        required : true,
        trim : true
    },
    resp : {
        type : String,
        required : true,
        trim : true
    },
    skill : {
        type : String,
        required : true,
        trim : true
    },
    emptype : {
        type : String,
        required : true,
        trim : true
    },
    mode : {
        type : String,
        required : true,
        trim : true
    },
    shift : {
        type : String,
        required : true,
        trim : true
    },
    salary : {
        type : String,
        required : true,
        trim : true
    },
    location : {
        type : String,
        required : true,
        trim : true
    },
    openings : {
        type : Number,
        required : true,
        trim : true
    },
    isActive: {
        type: Boolean,
        default:true
    }

}, 
{
    collection : "jobs",
    timestamps : true
})

module.exports = mongoose.model("Job", JobModel)