const express = require('express');
const mongoose = require('mongoose')
const connectDb = require('./db')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const applicantDb=require('./db/applicantDb')
const multer = require('multer');
const fs =require('fs')


require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

mongoose.Promise = global.Promise;
// saving the data in backend 

app.use(express.static("./docs"))

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors());

app.use(`/api/v1/`, require('./route/authRoute'))
app.use(`/api/v1/jobs/`, require('./route/jobRoute'))
app.use(`/api/v1/applicants`, require('./route/applicantRoute'))
app.use(`/api/v1/offer/`, require('./route/offerRoute'))

app.all('*', (req, res, next)=>{
    res.status(404).json({ msg : `requested path not found , try '/api/v1/ `});
    next()
})

//resume file upload

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(!fs.existsSync(__dirname+'/docs'))
        {
            fs.mkdirSync(__dirname+'/docs')
        }
      cb(null, './docs');
    },
    filename: function (req, file, cb) {
      cb(null,file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/auth/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully!');
   
  });
 //

app.listen(PORT, async ()=>{
    await connectDb(process.env.MONGO_URL)
    console.log(`server is started @ http://localhost:${PORT}`);
})