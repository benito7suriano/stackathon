import React from 'react'
import Chart from './Chart'

const DUMMY_SHIT = [
  { id: 0, reading: 10 },
  { id: 1, reading: 15 },
  { id: 2, reading: 35 },
  { id: 3, reading: 7 },
  { id: 4, reading: 30 },
  { id: 5, reading: 150 },
  { id: 6, reading: 77 }
]

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      readings: DUMMY_SHIT
    }
  }

  render() {
    console.log('State before rendering: ', this.state.readings)
    return (
      <div id="demo" className="bg-gray-c column center-x fill-xy">
        <h1>Dashboard</h1>
        <Chart lineData={this.state.readings} />
      </div>
    )
  }
}
