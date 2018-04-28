// This is the main entry point to the server code

const chalk = require('chalk')
const { db } = require('./server/db/models')
const app = require('./server')
const PORT = 8080

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log(chalk.green(`
      Db synced!
    `))
    app.listen(PORT, () => console.log(chalk.green(`
      Serving happy hour from tea o'clock to 20 'til gin...

      http://localhost:8080/
    `)))
  })
