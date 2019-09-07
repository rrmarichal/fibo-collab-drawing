import React from 'react'
import { ART, View, Text, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import TopRightSlice from '../Shapes/TopRightSlice'
import LeftSlice from '../Shapes/LeftSlice'
import BottomRightSlice from '../Shapes/BottomRightSlice'

const RNViewPropTypes = ViewPropTypes || View.propTypes

const getMemberLetter = name => name[0].toUpperCase()

const ThreeMembersRoomAvatar = ({ size, members, containerStyle }) => (
	<View style={containerStyle}>
		<ART.Surface width={size} height={size}>
			<LeftSlice
				radius={size / 2}
				angle={Math.PI}
				offset={{ top: 0, left: 0 }}
				fill={members[0].color} />
			<TopRightSlice
				radius={size / 2}
				angle={Math.PI / 2}
				offset={{ top: 0, left: 0 }}
				fill={members[1].color} />
			<BottomRightSlice
				radius={size / 2}
				angle={Math.PI / 2}
				offset={{ top: 0, left: 0 }}
				fill={members[2].color} />
		</ART.Surface>

		<View style={styles.avatarLetterBox(0, 0, size / 2, size)}>
			<Text style={styles.avatarLetterText}>
				{getMemberLetter(members[0].name)}
			</Text>
		</View>

		<View style={styles.avatarLetterBox(size / 2, 0, size / 2, size / 2)}>
			<Text style={styles.avatarLetterText}>
				{getMemberLetter(members[1].name)}
			</Text>
		</View>

		<View
			style={styles.avatarLetterBox(
				size / 2,
				size / 2,
				size / 2,
				size / 2
			)}>
			<Text style={styles.avatarLetterText}>
				{getMemberLetter(members[2].name)}
			</Text>
		</View>
	</View>
)

ThreeMembersRoomAvatar.propTypes = {
	size: PropTypes.number,
	members: PropTypes.array,
	containerStyle: RNViewPropTypes.style
}

const styles = {
	avatarLetterBox: (left, top, width, height) => ({
		backgroundColor: 'transparent',
		position: 'absolute',
		left,
		top,
		width,
		height,
		alignItems: 'center',
		justifyContent: 'center'
	}),

	avatarLetterText: {
		color: 'white',
		fontWeight: '700'
	}
}

export default ThreeMembersRoomAvatar
