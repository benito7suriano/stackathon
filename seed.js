const {db, PotReading} = require('./server/db/models')

const potReadings = []

for (let i = 0; i < 100; i++) {
  const newEntry = {}
  newEntry.reading = Math.floor(Math.random() * 1024)
  potReadings.push(newEntry)
}

const seed = async () => {
  console.log('Seeding the db!')
  await db.sync({ force: true })
  await Promise.all(potReadings.map(reading => PotReading.create(reading)))
  db.close()
  console.log('Db connection closed, seeding successful!')
}

seed().catch(err => {
  console.error(err)
  db.close()
})
