import React from 'react'
import { ART, View, Text } from 'react-native'
import PropTypes from 'prop-types'

import Circle from '../Shapes/Circle'

const getMemberLetter = (name) => {
  return name[0].toUpperCase()
}

const OneMemberRoomAvatar = ({ size, members }) => {

  return (
    <View>
      <ART.Surface width={size} height={size}>
        <Circle
          radius={size/2}
          angle={Math.PI}
          size={size}
          offset={{ top: 0, left: 0 }}
          fill={members[0].color} />
      </ART.Surface>

      <View style={styles.avatarLetterBox(0, 0, size, size)}>
        <Text style={styles.avatarLetterText(size)}>
          {getMemberLetter(members[0].name)}
        </Text>
      </View>
    </View>
  )

}

OneMemberRoomAvatar.propTypes = {
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
    fontWeight: '600',
    fontSize: size/3
  })

}

export default OneMemberRoomAvatar