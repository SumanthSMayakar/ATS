const mongoose = require('mongoose')

const connectDb = url =>{
    return mongoose.connect(url, {useNewUrlParser:true}, (err)=>{
        console.log('mongodb connected successfully.');
    })
 }

// const connectDb = async() =>{
//     return await mongoose.createConnection(process.env.MONGO_URL).asPromise();
// }

module.exports = connectDb

// const mongoose = require('mongoose')

// // const connectDb = async()=>{
// //     return await mongoose.createConnection(process.env.MONGO_URL).asPromise();
// // }
// const connectDb =url =>{
//     mongoose.set({strictQuery:true});
//     return mongoose.connect(url,{useNewUrlParser:true},(err)=>{
//         console.log(' mongodb connected successfully')
//     })
// }
// module.exports = connectDb