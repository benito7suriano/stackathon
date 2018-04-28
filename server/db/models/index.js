const db = require('../index')
const PotReading = require('./potReading')

// Require all models and set their associations here!

// Running each model module registers each model into our sequlize db
// This works if we all use the same sequelize instance (instantiated in and exported from '/db/index.js')

// Exporting all models from here seems like a good idea

module.exports = { db, PotReading }
