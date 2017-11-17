'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/withAnimation.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=






withAnimation;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function withAnimation(WrappedComponent,indeterminateProgress){var _class,_temp;
var wrappedComponentName=WrappedComponent.displayName||
WrappedComponent.name||
'Component';

return _temp=_class=function(_Component){_inherits(AnimatedComponent,_Component);














function AnimatedComponent(props){_classCallCheck(this,AnimatedComponent);var _this=_possibleConstructorReturn(this,(AnimatedComponent.__proto__||Object.getPrototypeOf(AnimatedComponent)).call(this,
props));

_this.progressValue=Math.min(Math.max(props.progress,0),1);
_this.rotationValue=0;
_this.state={
progress:new _reactNative.Animated.Value(_this.progressValue),
rotation:new _reactNative.Animated.Value(_this.rotationValue)};return _this;

}_createClass(AnimatedComponent,[{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
this.state.progress.addListener(function(event){_this2.progressValue=event.value;});
this.state.rotation.addListener(function(event){_this2.rotationValue=event.value;});
if(this.props.indeterminate){
this.spin();
if(indeterminateProgress){
_reactNative.Animated.spring(this.state.progress,{
toValue:indeterminateProgress}).
start();
}
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.state.progress.removeAllListeners();
this.state.rotation.removeAllListeners();
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){var _this3=this;
if(props.indeterminate!==this.props.indeterminate){
if(props.indeterminate){
this.spin();
}else{
_reactNative.Animated.spring(this.state.rotation,{
toValue:this.rotationValue>0.5?1:0}).
start(function(endState){
if(endState.finished){
_this3.state.rotation.setValue(0);
}
});
}
}
var progress=props.indeterminate?
indeterminateProgress||0:
Math.min(Math.max(props.progress,0),1);

if(progress!==this.progressValue){
if(props.animated){
_reactNative.Animated.spring(this.state.progress,{
toValue:progress,
bounciness:0}).
start();
}else{
this.state.progress.setValue(progress);
}
}
}},{key:'spin',value:function spin()

{var _this4=this;
this.state.rotation.setValue(0);
_reactNative.Animated.timing(this.state.rotation,{
toValue:this.props.direction==='counter-clockwise'?-1:1,
duration:1000,
easing:_reactNative.Easing.linear,
isInteraction:false}).
start(function(endState){
if(endState.finished){
_this4.spin();
}
});
}},{key:'render',value:function render()


{
return(
_react2.default.createElement(WrappedComponent,_extends({},
this.props,{
progress:this.props.animated?this.state.progress:this.props.progress,
rotation:this.state.rotation,__source:{fileName:_jsxFileName,lineNumber:104}})));


}}]);return AnimatedComponent;}(_react.Component),_class.displayName='withAnimation('+wrappedComponentName+')',_class.propTypes={animated:_propTypes2.default.bool,direction:_propTypes2.default.oneOf(['clockwise','counter-clockwise']),indeterminate:_propTypes2.default.bool,progress:_propTypes2.default.number.isRequired},_class.defaultProps={animated:true,indeterminate:false,progress:0},_temp;

}