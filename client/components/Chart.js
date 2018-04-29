import React from 'react'
import generateGraph from '../../utils/generateGraph'
import axios from 'axios'

// const DUMMY_SHIT = [
//   { id: 0, reading: 10 },
//   { id: 1, reading: 15 },
//   { id: 2, reading: 35 },
//   { id: 3, reading: 7 },
//   { id: 4, reading: 30 },
//   { id: 5, reading: 150 },
//   { id: 6, reading: 77 }
// ]

export default class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      width: 1000,
      height: 500,
      margins: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      },
      readings: []
    }
  }

  async componentDidMount() {
    try {
      const WIDTH = this.state.width
      const HEIGHT = this.state.height
      const MARGINS = this.state.margins

      const { data } = await axios.get('/api/pot-readings')
      console.log('Got this data: ', data)
      const readings = data
      this.setState({ readings })
      const lineData = this.state.readings

      generateGraph(lineData, MARGINS, HEIGHT, WIDTH)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    console.log(this.state)
    return <svg id="visualization" height="500" width="1000" />
  }
}
