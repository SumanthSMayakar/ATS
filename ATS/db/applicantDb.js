const mongoose = require('mongoose')

// const connectDb = async()=>{
//     return await mongoose.createConnection(process.env.MONGO_URL).asPromise();
// }
const connectDb =url =>{
    mongoose.set({strictQuery:true});
    return mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        console.log('applicant mongodb connected successfully')
    })
}
module.exports = connectDb