const router = require('express').Router()

// Routes go here
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER, this file should almost be like a table of contents for the routers you create!

router.use('/pot-readings', require('./potReadings'))

module.exports = router
