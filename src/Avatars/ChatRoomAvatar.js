import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DefaultAvatar from './DefaultAvatar'
import OneMemberRoomAvatar from './OneMemberRoomAvatar'
import TwoMembersRoomAvatar from './TwoMembersRoomAvatar'
import ThreeMembersRoomAvatar from './ThreeMembersRoomAvatar'
import FourMembersRoomAvatar from './FourMembersRoomAvatar'

export default class ChatRoomAvatar extends Component {

  static propTypes = {
    info: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string
    })),
    size: PropTypes.number,
    style: PropTypes.number
  }

  render() {
    const { info, size, style } = this.props
    if (!info || info.length === 0) {
      return <DefaultAvatar containerStyle={style} size={size}/>
    }
    if (info.length === 1) {
      return <OneMemberRoomAvatar containerStyle={style} size={size} members={info}/>
    }
    if (info.length === 2) {
      return <TwoMembersRoomAvatar containerStyle={style} size={size} members={info}/>
    }
    if (info.length === 3) {
      return <ThreeMembersRoomAvatar containerStyle={style} size={size} members={info}/>
    }
    return <FourMembersRoomAvatar containerStyle={style} size={size} members={info.slice(0, 4)}/>
  }
}
