'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/CircleSnail.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');







var _Arc=require('./Shapes/Arc');var _Arc2=_interopRequireDefault(_Arc);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedArc=_reactNative.Animated.createAnimatedComponent(_Arc2.default);

var MIN_ARC_ANGLE=0.1;
var MAX_ARC_ANGLE=1.5*Math.PI;

var RNViewPropTypes=_reactNative.ViewPropTypes||_reactNative.View.propTypes;var

CircleSnail=function(_Component){_inherits(CircleSnail,_Component);



























function CircleSnail(props){_classCallCheck(this,CircleSnail);var _this=_possibleConstructorReturn(this,(CircleSnail.__proto__||Object.getPrototypeOf(CircleSnail)).call(this,
props));

_this.state={
startAngle:new _reactNative.Animated.Value(-MIN_ARC_ANGLE),
endAngle:new _reactNative.Animated.Value(0),
rotation:new _reactNative.Animated.Value(0),
colorIndex:0};return _this;

}_createClass(CircleSnail,[{key:'componentDidMount',value:function componentDidMount()

{
if(this.props.animating){
this.animate();
this.spin();
}
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){
if(props.animating!==this.props.animating){
if(props.animating){
this.animate();
this.spin();
}else{
this.stopAnimations();
}
}
}},{key:'animate',value:function animate()

{var _this2=this;var iteration=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
_reactNative.Animated.sequence([
_reactNative.Animated.timing(this.state.startAngle,{
toValue:-MAX_ARC_ANGLE*iteration-MIN_ARC_ANGLE,
duration:this.props.duration||1000,
isInteraction:false,
easing:_reactNative.Easing.inOut(_reactNative.Easing.quad)}),

_reactNative.Animated.timing(this.state.endAngle,{
toValue:-MAX_ARC_ANGLE*iteration,
duration:this.props.duration||1000,
isInteraction:false,
easing:_reactNative.Easing.inOut(_reactNative.Easing.quad)})]).

start(function(endState){
if(endState.finished){
if(Array.isArray(_this2.props.color)){
_this2.setState({
colorIndex:iteration%_this2.props.color.length});

}
_this2.animate(iteration+1);
}
});
}},{key:'spin',value:function spin()

{var _this3=this;
_reactNative.Animated.timing(this.state.rotation,{
toValue:1,
duration:this.props.spinDuration||5000,
easing:_reactNative.Easing.linear,
isInteraction:false}).
start(function(endState){
if(endState.finished){
_this3.state.rotation.setValue(0);
_this3.spin();
}
});
}},{key:'stopAnimations',value:function stopAnimations()

{
this.state.startAngle.stopAnimation();
this.state.endAngle.stopAnimation();
this.state.rotation.stopAnimation();
}},{key:'render',value:function render()

{var _props=











this.props,animating=_props.animating,children=_props.children,color=_props.color,direction=_props.direction,hidesWhenStopped=_props.hidesWhenStopped,size=_props.size,style=_props.style,thickness=_props.thickness,strokeCap=_props.strokeCap,restProps=_objectWithoutProperties(_props,['animating','children','color','direction','hidesWhenStopped','size','style','thickness','strokeCap']);

if(!animating&&hidesWhenStopped){
return null;
}

var radius=size/2-thickness;
var offset={
top:thickness,
left:thickness};


var directionFactor=direction==='counter-clockwise'?-1:1;

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},
restProps,{
style:[
style,
{
backgroundColor:'transparent',
overflow:'hidden',
transform:[{
rotate:this.state.rotation.interpolate({
inputRange:[0,1],
outputRange:['0deg',directionFactor*360+'deg']})}]}],__source:{fileName:_jsxFileName,lineNumber:150}}),





_react2.default.createElement(_reactNative.ART.Surface,{
width:size,
height:size,__source:{fileName:_jsxFileName,lineNumber:166}},

_react2.default.createElement(AnimatedArc,{
direction:direction==='counter-clockwise'?'clockwise':'counter-clockwise',
radius:radius,
stroke:Array.isArray(color)?color[this.state.colorIndex]:color,
offset:offset,
startAngle:this.state.startAngle,
endAngle:this.state.endAngle,
strokeCap:strokeCap,
strokeWidth:thickness,__source:{fileName:_jsxFileName,lineNumber:170}})),


children));


}}]);return CircleSnail;}(_react.Component);CircleSnail.propTypes={animating:_propTypes2.default.bool,color:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.arrayOf(_propTypes2.default.string)]),children:_propTypes2.default.node,direction:_propTypes2.default.oneOf(['clockwise','counter-clockwise']),duration:_propTypes2.default.number,hidesWhenStopped:_propTypes2.default.bool,size:_propTypes2.default.number,spinDuration:_propTypes2.default.number,style:RNViewPropTypes.style,thickness:_propTypes2.default.number,strokeCap:_propTypes2.default.string};CircleSnail.defaultProps={animating:true,color:'rgba(0, 122, 255, 1)',direction:'counter-clockwise',hidesWhenStopped:false,size:40,thickness:3,strokeCap:'round'};exports.default=CircleSnail;