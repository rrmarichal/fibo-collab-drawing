import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, ART, View, ViewPropTypes } from 'react-native'

import Arc from '../Shapes/Arc'
import withProgressAnimation from '../Animations/withProgressAnimation'

const CIRCLE = Math.PI * 2

const AnimatedArc = Animated.createAnimatedComponent(Arc)

const RNViewPropTypes = ViewPropTypes || View.propTypes

export class CircularProgressBar extends Component {
  static propTypes = {
    animated: PropTypes.bool,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    color: PropTypes.string,
    children: PropTypes.node,
    direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
    formatText: PropTypes.func,
    progress: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.instanceOf(Animated.Value)
    ]),
    strokeCap: PropTypes.string,
    showText: PropTypes.bool,
    size: PropTypes.number,
    containerStyle: RNViewPropTypes.style,
    thickness: PropTypes.number
  };

  static defaultProps = {
    borderWidth: 1,
    color: 'rgba(0, 122, 255, 1)',
    direction: 'clockwise',
    formatText: progress => `${Math.round(progress * 100)}%`,
    progress: 0,
    showText: false,
    size: 40,
    thickness: 3
  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      progressValue: 0
    }
  }

  componentDidMount() {
    if (this.props.animated) {
      this.props.progress.addListener((event) => {
        this.setState({ progressValue: event.value })
      })
    }
  }

  render() {
    const {
      animated,
      borderColor,
      borderWidth,
      color,
      children,
      direction,
      formatText,
      progress,
      showText,
      size,
      containerStyle,
      strokeCap,
      thickness
    } = this.props

    const showBorder = borderWidth || 0

    const radius = size/2
    const offset = {
      top: thickness/2,
      left: thickness/2
    }
    
    const ProgressArc = animated ? AnimatedArc : Arc
    const angle = animated ? Animated.multiply(progress, CIRCLE) : progress * CIRCLE
    const progressValue = animated ? this.state.progressValue : progress
    
    return (
      <View style={[styles.container, containerStyle]} >
        <ART.Surface width={size+thickness} height={size+thickness}>
          {showBorder &&
            <Arc
              radius={size / 2}
              startAngle={0}
              offset={offset}
              endAngle={2 * Math.PI}
              stroke={borderColor || color}
              strokeCap={strokeCap}
              strokeWidth={showBorder} /> }
          {progressValue !== 0 &&
            <ProgressArc
              radius={radius}
              offset={offset}
              startAngle={0}
              endAngle={angle}
              direction={direction}
              stroke={color}
              strokeCap={strokeCap}
              strokeWidth={thickness} /> }
        </ART.Surface>
        {showText &&
          <View style={styles.text(size + thickness, size, size / 2)}>
            <View>
              {formatText(progressValue)}
            </View>
          </View> }
        {children}
      </View>
    )
  }
}

const styles = {
  
  container: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },

  text: (width, height, borderRadius) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    borderRadius: borderRadius,
    alignItems: 'center',
    justifyContent: 'center'
  })

}

export default withProgressAnimation(CircularProgressBar)
