'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.ProgressCircle=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Circle.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');








var _Arc=require('./Shapes/Arc');var _Arc2=_interopRequireDefault(_Arc);
var _withAnimation=require('./withAnimation');var _withAnimation2=_interopRequireDefault(_withAnimation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var CIRCLE=Math.PI*2;

var AnimatedSurface=_reactNative.Animated.createAnimatedComponent(_reactNative.ART.Surface);
var AnimatedArc=_reactNative.Animated.createAnimatedComponent(_Arc2.default);

var RNViewPropTypes=_reactNative.ViewPropTypes||_reactNative.View.propTypes;

var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'transparent',
overflow:'hidden'}});var



ProgressCircle=exports.ProgressCircle=function(_Component){_inherits(ProgressCircle,_Component);

































function ProgressCircle(props,context){_classCallCheck(this,ProgressCircle);var _this=_possibleConstructorReturn(this,(ProgressCircle.__proto__||Object.getPrototypeOf(ProgressCircle)).call(this,
props,context));

_this.progressValue=0;return _this;
}_createClass(ProgressCircle,[{key:'componentWillMount',value:function componentWillMount()

{var _this2=this;
if(this.props.animated){
this.props.progress.addListener(function(event){
_this2.progressValue=event.value;
if(_this2.props.showsText||_this2.progressValue===1){
_this2.forceUpdate();
}
});
}
}},{key:'render',value:function render()

{var _props=



















this.props,animated=_props.animated,borderColor=_props.borderColor,borderWidth=_props.borderWidth,color=_props.color,children=_props.children,direction=_props.direction,formatText=_props.formatText,indeterminate=_props.indeterminate,progress=_props.progress,rotation=_props.rotation,showsText=_props.showsText,size=_props.size,style=_props.style,strokeCap=_props.strokeCap,textStyle=_props.textStyle,thickness=_props.thickness,unfilledColor=_props.unfilledColor,restProps=_objectWithoutProperties(_props,['animated','borderColor','borderWidth','color','children','direction','formatText','indeterminate','progress','rotation','showsText','size','style','strokeCap','textStyle','thickness','unfilledColor']);

var border=borderWidth||(indeterminate?1:0);

var radius=size/2;
var offset={
top:thickness/2,
left:thickness/2};

var textOffset=0;

var Surface=rotation?AnimatedSurface:_reactNative.ART.Surface;
var Shape=animated?AnimatedArc:_Arc2.default;
var progressValue=animated?this.progressValue:progress;
var angle=animated?_reactNative.Animated.multiply(progress,CIRCLE):progress*CIRCLE;

return(
_react2.default.createElement(_reactNative.View,_extends({style:[styles.container,style]},restProps,{__source:{fileName:_jsxFileName,lineNumber:117}}),
_react2.default.createElement(Surface,{
width:size+thickness,
height:size+thickness,
style:{
transform:[{
rotate:indeterminate&&rotation?
rotation.interpolate({
inputRange:[0,1],
outputRange:['0deg','360deg']}):

'0deg'}]},__source:{fileName:_jsxFileName,lineNumber:118}},



border?
_react2.default.createElement(_Arc2.default,{
radius:size/2,
startAngle:0,
offset:offset,
endAngle:(indeterminate?1.8:2)*Math.PI,
stroke:borderColor||color,
strokeCap:strokeCap,
strokeWidth:border,__source:{fileName:_jsxFileName,lineNumber:133}}):

false,
unfilledColor&&progressValue!==1?
_react2.default.createElement(Shape,{
radius:radius,
offset:offset,
startAngle:angle,
endAngle:CIRCLE,
direction:direction,
stroke:unfilledColor,
strokeWidth:thickness,__source:{fileName:_jsxFileName,lineNumber:144}}):

false,
!indeterminate&&progressValue!==0?
_react2.default.createElement(Shape,{
radius:radius,
offset:offset,
startAngle:0,
endAngle:angle,
direction:direction,
stroke:color,
strokeCap:strokeCap,
strokeWidth:thickness,__source:{fileName:_jsxFileName,lineNumber:155}}):

false),

!indeterminate&&showsText?
_react2.default.createElement(_reactNative.View,{
style:{
position:'absolute',
left:textOffset,
top:textOffset,
width:size+thickness,
height:size,
borderRadius:size/2,
alignItems:'center',
justifyContent:'center'},__source:{fileName:_jsxFileName,lineNumber:168}},


_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:180}},
formatText(progressValue))):


false,
children));


}}]);return ProgressCircle;}(_react.Component);ProgressCircle.propTypes={animated:_propTypes2.default.bool,borderColor:_propTypes2.default.string,borderWidth:_propTypes2.default.number,color:_propTypes2.default.string,children:_propTypes2.default.node,direction:_propTypes2.default.oneOf(['clockwise','counter-clockwise']),formatText:_propTypes2.default.func,indeterminate:_propTypes2.default.bool,progress:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.instanceOf(_reactNative.Animated.Value)]),rotation:_propTypes2.default.instanceOf(_reactNative.Animated.Value),showsText:_propTypes2.default.bool,size:_propTypes2.default.number,style:RNViewPropTypes.style,textStyle:_reactNative.Text.propTypes.style,thickness:_propTypes2.default.number,unfilledColor:_propTypes2.default.string};ProgressCircle.defaultProps={borderWidth:1,color:'rgba(0, 122, 255, 1)',direction:'clockwise',formatText:function formatText(progress){return Math.round(progress*100)+'%';},progress:0,showsText:false,size:40,thickness:3};exports.default=


(0,_withAnimation2.default)(ProgressCircle);