
// we use html-pdf for pdf
const pdf = require('html-pdf')
const path = require('path')
const nodemailer = require('nodemailer')
const fs = require('fs')
require('dotenv').config()

const pdfTemplate = require("../Documents/document")

const Offers = require('../model/offerModel')


exports.createPdf = (req,res) => {
    pdf.create(pdfTemplate(req.body)).toFile('controller/OfferLetter.pdf',(err) => {
        if(err){
            console.log(err);
        }
        res.send('Pdf generated')
    })
}

exports.fetchPdf = (req,res) => {
    res.sendFile(path.join(__dirname, 'OfferLetter.pdf'))
}

exports.sendPdf = (req,res) => {

    pathToAttachment = path.join(__dirname,'OfferLetter.pdf')

    attachment = fs.readFileSync(pathToAttachment).toString("base64")

    let smtpTransport =  nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
                user: process.env.MAIL_ID,
                pass: process.env.MAIL_PASSWORD
        },
        tls:{rejectUnauthorized:false}
    })

     smtpTransport.sendMail({
        from:process.env.MAIL_ID,
        to: req.body.email,
        subject:'Offer Letter',
        html:`
                <div style="margin: 20px;">
                    <h3>Dear ${req.body.name},</h3>
                    <p>This is further to our interviews with you for openings in our organization, We are pleased to offer you the position of  ${req.body.position}. Pls find the attached the details of the Offer letter.</p>
                    <p>Please go through the same in detail. You are expected to join  on or before ${req.body.joiningDate} and bring a copy of the following documents on your joining date. </p>
                    <p>You are requested to please bring a copy of the following documents on your joining.</p>
                    <ol>
                        <li>Relieving letter (of Last Organization)</li>
                        <li>Relieving letter (of Last Organization)</li>
                        <li>Last Month Salary Slip (of Last Organization)</li>
                        <li>Educational Certificates</li>
                        <li>PAN Card</li>
                        <li>Aadhar Card (as an ID & Address proof)</li>
                        <li>Canceled cheque (to disburse salary in your bank A/C)</li>
                    </ol>
                    <p>Congratulation!  Definitely you will get a new turn in your career path.</p>
                    <p>All the best !!!</p>
                    <h3>Regards,</h3>
                    <p>Vice President & CFO</p>
                    <h4>Be-Practical Pvt. Ltd.</h4>
                
                </div>`,
        attachments:[ 
            {
                content: attachment,
                filename:'OfferLetter.pdf',
                contentType: 'application/pdf',
                path: pathToAttachment
            }
        ]
    },function(error,info){
         if(error){
            console.log(error);
         }  
         res.send("Mail has been sended to your email, Check your mail.")
    })
    
    
}
exports.createoffer = async(req,res) => {
    try {
        const { jobid } = req.body

        let newoffers = await Offers.create(req.body)

        res.json({ msg: "New offer Created Successfully", offer: newoffers })

    } catch (err) {
        return  res.status(500).json({ msg: err.message })
    }
}

exports.updateoffer = async(req,res) => {
    try {  
        let data = await Offers.findById({ _id: req.params.id })
            if(!data)
                return res.status(404).json({ msg: "Job doesn't exists."})
            
        let updated = await Offers.findByIdAndUpdate({ _id: req.params.id }, req.body)
            res.status(200).json({ msg: "Job updated successfully", offer: updated })
        } catch (err) {
            return  res.status(500).json({ msg: err.message })
        }
}

exports.deleteoffer =async (req,res) => {
    try {
        let data =await Offers.findById({ _id: req.params.id })
            if(!data)
                return res.status(404).json({ msg: "offer doesn't exists."})

            await Offers.findByIdAndDelete({ _id: req.params.id })

            return res.status(200).json({ msg: "offer deleted succcessfully"})
        
    } catch (err) {
        return  res.status(500).json({ msg: err.message })
    }
}

exports.getalloffer = async(req,res) => {
    try {
        let data =await  Offers.find()

        return res.status(200).json({ length : data.length , offers : data })
        
    } catch (err) {
        return res.status(500).json({ msg : err.message})
    }
}

exports.getsingleoffer =async (req,res) => {
    try {
        let data = await Offers.findById({ _id: req.params.id })
             if(!data)
                 return res.status(404).json({ msg: "Job doesn't exists."})

             res.status(200).json({ offers: data })
     } catch (err) {
         return  res.status(500).json({ msg: err.message })
     }
}
