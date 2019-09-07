import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ART } from 'react-native'

const makeSectorPath = (x, y, angle, radius) => {
	const endAngle = Math.PI / 2
	const centerX = x + radius
	const centerY = y + radius

	return `M${centerX} ${centerY}
          	L${0} ${centerY}
          	A${radius} ${radius} 1 0 0 ${centerX - Math.cos(endAngle) * radius} ${centerY + Math.sin(endAngle) * radius}
          	L${centerX} ${centerY}`
}

export default class BottomRightSlice extends Component {
	static propTypes = {
		angle: PropTypes.number.isRequired, // in radians
		radius: PropTypes.number.isRequired,
		offset: PropTypes.shape({
			top: PropTypes.number,
			left: PropTypes.number
		})
	}

	static defaultProps = {
		offset: { top: 0, left: 0 }
	}

	render() {
		const { angle, radius, offset, ...restProps } = this.props
		const path = makeSectorPath(offset.left, offset.top, angle, radius)
		return <ART.Shape d={path} {...restProps} />
	}
}
