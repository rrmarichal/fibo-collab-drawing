import React from 'react'
import { ART, View, Text } from 'react-native'
import PropTypes from 'prop-types'

import RightSlice from '../Shapes/RightSlice'
import LeftSlice from '../Shapes/LeftSlice'

const getMemberLetter = (name) => {
  return name[0].toUpperCase()
}

const TwoMembersRoomAvatar = ({ size, members }) => {

  return (
    <View>
      <ART.Surface width={size} height={size}>
        <LeftSlice
          radius={size/2}
          fill={members[0].color} />
        <RightSlice
          radius={size/2}
          fill={members[1].color} />
      </ART.Surface>

      <View style={styles.avatarLetterBox(0, 0, size/2, size)}>
        <Text style={styles.avatarLetterText(size)}>
          {getMemberLetter(members[0].name)}
        </Text>
      </View>

      <View style={styles.avatarLetterBox(size/2, 0, size/2, size)}>
        <Text style={styles.avatarLetterText(size)}>
          {getMemberLetter(members[1].name)}
        </Text>
      </View>
    </View>
  )

}

TwoMembersRoomAvatar.propTypes = {
  size: PropTypes.number,
  members: PropTypes.array
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

  avatarLetterText: (size) => ({
    color: 'white',
    fontWeight: '700',
    fontSize: size/4
  })

}

export default TwoMembersRoomAvatar