const mongoose = require('mongoose')

const OfferModel = new mongoose.Schema({
    jobid : {
        type : String,
        required : true,
        trim : true
    },
    
    title : {
        type : String,
        required : true,
        trim : true
    },
    applicantname : {
        type : String,
        required : true,
        trim : true
    },
    email: {
        type : String,
        required : true,
        trim : true
    },
    date: {
        type : String,
        required : true,
        trim : true
    },
    number : {
        type : String,
        required : true,
        trim : true
    },
    
    isActive: {
        type: Boolean,
        default:true
    }

}, 
{
    collection : "offers",
    timestamps : true
})

module.exports = mongoose.model("Offer", OfferModel)
