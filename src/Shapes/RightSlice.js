/* eslint new-cap: ["error", { "capIsNew": false }] */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Arc from './Arc'

export default class RightSlice extends Component {
  static propTypes = {
    fill: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired
  };

  static defaultProps = {
    offset: { top: 0, left: 0 }
  };

  render() {
    const { radius, fill } = this.props
    return (
      <Arc
        radius={radius}
        startAngle={0}
        offset={{ top: 0, left: 0 }}
        endAngle={Math.PI}
        fill={fill} />
    )
  }
}
