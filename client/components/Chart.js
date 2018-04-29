import React from 'react'
import generateGraph from '../../utils/generateGraph'

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
      }
    }
  }

  componentDidMount() {
    const { lineData } = this.props
    const WIDTH = this.state.width
    const HEIGHT = this.state.height
    const MARGINS = this.state.margins

    generateGraph(lineData, MARGINS, HEIGHT, WIDTH)
  }

  render() {
    return <svg id="visualization" height="500" width="1000" />
  }
}
