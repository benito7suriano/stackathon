import React from 'react'
import Chart from './Chart'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      readings: [
        { xAxis: 1, yAxis: 5},
        { xAxis: 20, yAxis: 20},
        { xAxis: 40, yAxis: 10},
        { xAxis: 60, yAxis: 40},
        { xAxis: 80, yAxis: 5},
        { xAxis: 100, yAxis: 60}
      ]
    }
  }

  render() {
    return (
      <div id="demo" className="bg-gray-c column center-x fill-xy">
        <h1>Dashboard</h1>
        <Chart lineData={this.state.readings} />
      </div>
    )
  }
}
