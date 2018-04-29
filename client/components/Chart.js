import React from 'react'
import * as d3 from 'd3'

export default class Chart extends React.Component {
  constructor() {
    super()
    this.generateAxis = this.generateAxis.bind(this)
  }

  generateAxis = () => {
    const { lineData } = this.props
    const vis = d3.select('#visualization')

    const WIDTH = 1000
    const HEIGHT = 500
    const MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    }

    const xRange = d3
      .scaleLinear()
      .range([MARGINS.left, WIDTH - MARGINS.right])
      .domain([
        0,
        d3.max(lineData, data => data.xAxis)
      ])

    const yRange = d3
      .scaleLinear()
      .range([HEIGHT, MARGINS.top, MARGINS.bottom])
      .domain([
        0,
        d3.max(lineData, data => data.yAxis)
      ])

    const xAxis = d3.axisBottom(xRange).tickSize(5)

    const yAxis = d3.axisLeft(yRange).tickSize(5)

    vis
      .append('svg:g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${HEIGHT - MARGINS.bottom})`)
      .call(xAxis)

    vis
      .append('svg:g')
      .attr('class', 'y axis')
      .attr('transform', `translate(${MARGINS.left}, 0)`)
      .call(yAxis)
  }

  componentDidMount() {
    this.generateAxis()
  }

  render() {
    return <svg id="visualization" height="500" width="1000" />
  }
}
