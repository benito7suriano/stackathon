import React from 'react'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      readings: []
    }
  }

  render() {
    return (
      <div id="demo" className="bg-blue column center-xy fill-xy">
        <h1>Ready to React</h1>
        <div>(⌐■_■)</div>
      </div>
    )
  }
}
