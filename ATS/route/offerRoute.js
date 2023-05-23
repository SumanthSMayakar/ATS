
const pdfRoutes = require('express').Router()
const { createPdf, fetchPdf, sendPdf, createoffer, updateoffer, deleteoffer , getalloffer, getsingleoffer} = require('../controller/offerController')

pdfRoutes.post('/createpdf', createPdf) //to generate pdf

pdfRoutes.get('/fetchpdf', fetchPdf) //to fetch the generated pdf

pdfRoutes.post('/sendpdf', sendPdf) //send pdf to mail

pdfRoutes.post('/createoffer', createoffer) 

pdfRoutes.patch('/updateoffer/:id', updateoffer) 

pdfRoutes.delete('/deleteoffer/:id', deleteoffer) 

pdfRoutes.get('/all', getalloffer) 

pdfRoutes.get('/single/:id', getsingleoffer) 

module.exports = pdfRoutes

