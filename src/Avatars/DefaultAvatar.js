import React from 'react'
import { ART, View } from 'react-native'
import PropTypes from 'prop-types'

import Circle from '../Shapes/Circle'

const DefaultAvatar = ({ size }) => {

  return (
    <View>
      <ART.Surface width={size} height={size}>
        <Circle
          radius={size/2}
          angle={Math.PI}
          size={size}
          offset={{ top: 0, left: 0 }}
          fill={'gray'} />
      </ART.Surface>
    </View>
  )

}

DefaultAvatar.propTypes = {
  size: PropTypes.number,
  members: PropTypes.array
}

export default DefaultAvatar