const Sequelize = require('sequelize')
const db = require('../index')

const PotReading = db.define('potreadings', {
  reading: {
    type: Sequelize.INTEGER
  }
})

module.exports = PotReading
