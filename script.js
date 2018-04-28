const SerialPort = require('serialport')
const serialport = new SerialPort('/dev/cu.usbmodem14611', {
  baudRate: 9600
})

const { Delimiter } = SerialPort.parsers
const parser = new Delimiter({
  delimiter: Buffer.from(',')
})

serialport.pipe(parser)

const arrOfInfo = []

serialport.on('open', () => {
  console.log('Serial Port opened')
  setTimeout(() => {
    serialport.close(err => {
      console.error('port closed', err)
    })
  }, 10000)
  parser.on('data', data => {
    arrOfInfo.push(data.toString('utf8'))
    console.log(data)
  })
})

serialport.on('close', () => {
  console.log(arrOfInfo)
})
