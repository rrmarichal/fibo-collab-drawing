import React from 'react'
import { ART, View, Text, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import TopLeftSlice from '../Shapes/TopLeftSlice'
import TopRightSlice from '../Shapes/TopRightSlice'
import BottomLeftSlice from '../Shapes/BottomLeftSlice'
import BottomRightSlice from '../Shapes/BottomRightSlice'

const RNViewPropTypes = ViewPropTypes || View.propTypes

const getMemberLetter = name => {
	return name[0].toUpperCase()
}

const FourMembersRoomAvatar = ({ size, members, containerStyle }) => {
	return (
		<View style={containerStyle}>
			<ART.Surface width={size} height={size}>
				<TopLeftSlice
					radius={size / 2}
					angle={Math.PI}
					offset={{ top: 0, left: 0 }}
					fill={members[0].color} />
				<TopRightSlice
					radius={size / 2}
					angle={Math.PI / 2}
					offset={{ top: 0, left: 0 }}
					fill={members[1].color} />
				<BottomLeftSlice
					radius={size / 2}
					angle={Math.PI / 2}
					offset={{ top: 0, left: 0 }}
					fill={members[2].color} />
				<BottomRightSlice
					radius={size / 2}
					angle={Math.PI / 2}
					offset={{ top: 0, left: 0 }}
					fill={members[3].color} />
			</ART.Surface>

			<View style={styles.avatarLetterBox(0, 0, size / 2, size / 2)}>
				<Text style={styles.avatarLetterText}>
					{getMemberLetter(members[0].name)}
				</Text>
			</View>

			<View
				style={styles.avatarLetterBox(size / 2, 0, size / 2, size / 2)}>
				<Text style={styles.avatarLetterText}>
					{getMemberLetter(members[1].name)}
				</Text>
			</View>

			<View
				style={styles.avatarLetterBox(0, size / 2, size / 2, size / 2)}>
				<Text style={styles.avatarLetterText}>
					{getMemberLetter(members[2].name)}
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
					{getMemberLetter(members[3].name)}
				</Text>
			</View>
		</View>
	)
}

FourMembersRoomAvatar.propTypes = {
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

export default FourMembersRoomAvatar
