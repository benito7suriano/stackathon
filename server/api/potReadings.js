const router = require('express').Router()
const {PotReading} = require('../db/models')

// GET api/pot-readings/

router.get('/', async (req, res, next) => {
  try {
    const readings = await PotReading.findAll()
    res.json(readings)
  } catch (err) {
    next(err)
  }
})

// POST api/pot-readings/

router.post('/', async (req, res, next) => {
  try {
    const reading = await PotReading.create(req.body)
    res.json(reading)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found')
  err.status = 404
  next(err)
})

module.exports = router
