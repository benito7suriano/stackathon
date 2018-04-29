import * as d3 from 'd3'
import myRange from './range'

const generateGraph = (data, margins, height, width) => {
  const vis = d3.select('#visualization')

  const [xRange, yRange] = myRange(margins, width, height, data, 'x')

  const xAxis = d3.axisBottom(xRange).tickSize(5)
  const yAxis = d3.axisLeft(yRange).tickSize(5)

  const xx = Object.keys(data[0])[0]
  const yy = Object.keys(data[0])[1]

  const lineFunc = d3.line()
  .x(d => xRange(d[xx]))
  .y(d => yRange(d[yy]))
  .curve(d3.curveLinear)

  vis
    .append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0,${height - margins.bottom})`)
    .call(xAxis)

  vis
    .append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', `translate(${margins.left}, 0)`)
    .call(yAxis)

  vis
    .append('svg:path')
    .attr('d', lineFunc(data))
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2)
    .attr('fill', 'none')
}

export default generateGraph
