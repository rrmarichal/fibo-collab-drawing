import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ViewPropTypes, View } from 'react-native'

import DefaultAvatar from './DefaultAvatar'
import OneMemberRoomAvatar from './OneMemberRoomAvatar'
import TwoMembersRoomAvatar from './TwoMembersRoomAvatar'
import ThreeMembersRoomAvatar from './ThreeMembersRoomAvatar'
import FourMembersRoomAvatar from './FourMembersRoomAvatar'

const RNViewPropTypes = ViewPropTypes || View.propTypes

export default class ChatRoomAvatar extends Component {
	static propTypes = {
		info: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				color: PropTypes.string
			})
		),
		size: PropTypes.number,
		containerStyle: RNViewPropTypes.style
	}

	render() {
		const { info, size, containerStyle } = this.props
		if (!info || info.length === 0) {
			return <DefaultAvatar containerStyle={containerStyle} size={size} />
		}
		if (info.length === 1) {
			return (
				<OneMemberRoomAvatar
					containerStyle={containerStyle}
					size={size}
					members={info} />
			)
		}
		if (info.length === 2) {
			return (
				<TwoMembersRoomAvatar
					containerStyle={containerStyle}
					size={size}
					members={info} />
			)
		}
		if (info.length === 3) {
			return (
				<ThreeMembersRoomAvatar
					containerStyle={containerStyle}
					size={size}
					members={info}
				/>
			)
		}
		return (
			<FourMembersRoomAvatar
				containerStyle={containerStyle}
				size={size}
				members={info.slice(0, 4)} />
		)
	}
}
