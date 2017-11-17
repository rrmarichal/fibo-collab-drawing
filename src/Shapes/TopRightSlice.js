/* eslint new-cap: ["error", { "capIsNew": false }] */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sector from './Sector'

export default class TopLeftSlice extends Component {
  static propTypes = {
    fill: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired,
    offset: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number
    })
  };

  static defaultProps = {
    offset: { top: 0, left: 0 }
  };

  render() {
    const { radius, offset, fill } = this.props
    return (
      <Sector
        radius={radius}
        angle={Math.PI/2}
        offset={offset}
        fill={fill} />
    )
  }
}
