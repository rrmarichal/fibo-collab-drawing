import React from 'react'
import { ART, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import Circle from '../Shapes/Circle'

const RNViewPropTypes = ViewPropTypes || View.propTypes

const DefaultAvatar = ({ size, containerStyle }) => {
	return (
		<View style={containerStyle}>
			<ART.Surface width={size} height={size}>
				<Circle
					radius={size / 2}
					angle={Math.PI}
					size={size}
					offset={{ top: 0, left: 0 }}
					fill='gray' />
			</ART.Surface>
		</View>
	)
}

DefaultAvatar.propTypes = {
	size: PropTypes.number,
	containerStyle: RNViewPropTypes.style
}

export default DefaultAvatar
