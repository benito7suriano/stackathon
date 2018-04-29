import * as d3 from 'd3'

const myRange = (margins, width, height, data) => {
  const resultArr = []
  const xx = Object.keys(data[0])[0]
  const yy = Object.keys(data[0])[1]

  const rangeArr = (index, marginObj, heightValue, widthValue) => {
    if (index === 0) {
      return [marginObj.left, widthValue - marginObj.right]
    } else if (index === 1) {
      return [heightValue - marginObj.top, marginObj.bottom]
    }
  }

  for (let i = 0; i < 2; i++) {
    let axis = d3
      .scaleLinear()
      .range(rangeArr(i, margins, height, width))
      .domain([
        0,
        d3.max(data, d => {
          if (i === 0) {
            return d[xx]
          } else if (i === 1) {
            return d[yy]
          }
        })
      ])
    resultArr.push(axis)
  }

  return resultArr
}

export default myRange
