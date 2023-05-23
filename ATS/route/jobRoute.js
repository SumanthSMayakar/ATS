const jobRoute = require('express').Router()
const jobController = require('../controller/jobController')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')


jobRoute.get('/all', jobController.getAll)

jobRoute.get('/single/:id', jobController.getSingle)

jobRoute.post('/create', jobController.create)

jobRoute.patch('/update/:id', jobController.update)

jobRoute.delete('/delete/:id', jobController.delete)

jobRoute.patch('/cancel/:id', jobController.cancelJob)

module.exports = jobRoute