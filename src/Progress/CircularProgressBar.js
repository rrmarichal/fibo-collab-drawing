import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, ART, Text, View, ViewPropTypes } from 'react-native'

import Arc from '../Shapes/Arc'
import withAnimation from '../withAnimation'

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
    showsText: PropTypes.bool,
    size: PropTypes.number,
    style: RNViewPropTypes.style,
    thickness: PropTypes.number
  };

  static defaultProps = {
    borderWidth: 1,
    color: 'rgba(0, 122, 255, 1)',
    direction: 'clockwise',
    formatText: progress => `${Math.round(progress * 100)}%`,
    progress: 0,
    showsText: false,
    size: 40,
    thickness: 3
  };

  constructor(props, context) {
    super(props, context)
    this.progressValue = -1
  }

  componentWillMount() {
    if (this.props.animated) {
      this.props.progress.addListener((event) => {
        this.progressValue = event.value
        if (this.props.showsText || this.progressValue === 1 || this.progressValue === -1) {
          this.forceUpdate()
        }
      })
    }
  }

  componentDidMount() {
    if (this.progressValue === 0) {
      this.forceUpdate()
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
      showsText,
      size,
      style,
      strokeCap,
      thickness,
      ...restProps
    } = this.props

    const border = borderWidth || 0

    const radius = size/2
    const offset = {
      top: thickness/2,
      left: thickness/2
    }
    
    const Shape = animated ? AnimatedArc : Arc
    const progressValue = animated ? this.progressValue : progress
    const angle = animated ? Animated.multiply(progress, CIRCLE) : progress * CIRCLE

    console.log(`render: ${JSON.stringify(this.props)}`)

    return (
      <View style={[styles.container, style]} {...restProps}>
        <ART.Surface width={size+thickness} height={size+thickness}>
          {border &&
            <Arc
              radius={size / 2}
              startAngle={0}
              offset={offset}
              endAngle={2 * Math.PI}
              stroke={borderColor || color}
              strokeCap={strokeCap}
              strokeWidth={border} /> }
          
          <Shape
            radius={radius}
            offset={offset}
            startAngle={0}
            endAngle={angle}
            direction={direction}
            stroke={color}
            strokeCap={strokeCap}
            strokeWidth={thickness} /> 
        </ART.Surface>
        {showsText &&
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

export default withAnimation(CircularProgressBar)
