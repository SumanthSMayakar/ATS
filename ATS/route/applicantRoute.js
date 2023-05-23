
const applicantRoute=require('express').Router()
const applicantController=require('../controller/applicantController')
const auth = require('../middleware/auth')
const upload=require('../server')


applicantRoute.post(`/auth/createApplicant`,applicantController.createApplicant)
applicantRoute.get(`/auth/authToken`,applicantController.authToken)
applicantRoute.get(`/auth/allApplicant`,applicantController.allApplicant)
applicantRoute.get(`/auth/singleUser`,applicantController.singleUser)
applicantRoute.delete(`/auth/deleteApplicant/:id`,applicantController.deleteApplicant)
applicantRoute.put(`/auth/currentApplicant/:id` ,applicantController.currentApplicant)
module.exports=applicantRoute
