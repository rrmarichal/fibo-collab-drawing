import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'

export default function withAnimation(WrappedComponent) {
  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component'

  return class AnimatedComponent extends Component {
    static displayName = `withProgressAnimation(${wrappedComponentName})`;
    static propTypes = {
      animated: PropTypes.bool,
      direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
      progress: PropTypes.number.isRequired
    }

    static defaultProps = {
      animated: true,
      progress: 0
    }

    constructor(props) {
      super(props)
      this.progressValue = Math.min(Math.max(props.progress, 0), 1)
      this.state = {
        progress: new Animated.Value(0)
      }
    }

    componentDidMount() {
      this.state.progress.addListener((event) => { this.progressValue = event.value })
    }

    componentWillUnmount() {
      this.state.progress.removeAllListeners()
    }

    componentWillReceiveProps(props) {
      const progress = Math.min(Math.max(props.progress, 0), 1)
      if (progress !== this.progressValue) {
        this.fireAnimation(progress)
      }
    }

    componentWillMount() {
      this.fireAnimation(this.progressValue)
    }

    fireAnimation = (toValue) => {
      if (this.props.animated) {
        Animated.spring(this.state.progress, {
          toValue,
          bounciness: 0
        }).start()
      } else {
        this.state.progress.setValue(this.progressValue)
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          progress={this.props.animated ? this.state.progress : this.props.progress}
        />
      )
    }
  }
}
