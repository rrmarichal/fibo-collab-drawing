'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.ProgressPie=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Pie.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');







var _Circle=require('./Shapes/Circle');var _Circle2=_interopRequireDefault(_Circle);
var _Sector=require('./Shapes/Sector');var _Sector2=_interopRequireDefault(_Sector);
var _withAnimation=require('./withAnimation');var _withAnimation2=_interopRequireDefault(_withAnimation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var CIRCLE=Math.PI*2;

var AnimatedSurface=_reactNative.Animated.createAnimatedComponent(_reactNative.ART.Surface);
var AnimatedSector=_reactNative.Animated.createAnimatedComponent(_Sector2.default);

var RNViewPropTypes=_reactNative.ViewPropTypes||_reactNative.View.propTypes;

var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'transparent',
overflow:'hidden'}});var



ProgressPie=exports.ProgressPie=function(_Component){_inherits(ProgressPie,_Component);function ProgressPie(){_classCallCheck(this,ProgressPie);return _possibleConstructorReturn(this,(ProgressPie.__proto__||Object.getPrototypeOf(ProgressPie)).apply(this,arguments));}_createClass(ProgressPie,[{key:'render',value:function render()























{var _props=












this.props,animated=_props.animated,borderColor=_props.borderColor,borderWidth=_props.borderWidth,children=_props.children,color=_props.color,progress=_props.progress,rotation=_props.rotation,size=_props.size,style=_props.style,unfilledColor=_props.unfilledColor,restProps=_objectWithoutProperties(_props,['animated','borderColor','borderWidth','children','color','progress','rotation','size','style','unfilledColor']);


var Surface=rotation?AnimatedSurface:_reactNative.ART.Surface;
var Shape=animated?AnimatedSector:_Sector2.default;

var angle=animated?_reactNative.Animated.multiply(progress,CIRCLE):progress*CIRCLE;
var radius=size/2-borderWidth;
var offset={
top:borderWidth,
left:borderWidth};


return(
_react2.default.createElement(_reactNative.View,_extends({style:[styles.container,style]},restProps,{__source:{fileName:_jsxFileName,lineNumber:80}}),
_react2.default.createElement(Surface,{
width:size,
height:size,
style:rotation?{
transform:[{
rotate:rotation.interpolate({
inputRange:[0,1],
outputRange:['0deg','360deg']})}]}:


undefined,__source:{fileName:_jsxFileName,lineNumber:81}},

unfilledColor?
_react2.default.createElement(_Circle2.default,{
radius:radius,
offset:offset,
fill:unfilledColor,__source:{fileName:_jsxFileName,lineNumber:94}}):

false,
_react2.default.createElement(Shape,{
radius:radius,
angle:angle,
offset:offset,
fill:color,__source:{fileName:_jsxFileName,lineNumber:100}}),

borderWidth?
_react2.default.createElement(_Circle2.default,{
radius:size/2,
stroke:borderColor||color,
strokeWidth:borderWidth,__source:{fileName:_jsxFileName,lineNumber:107}}):

false),

children));


}}]);return ProgressPie;}(_react.Component);ProgressPie.propTypes={animated:_propTypes2.default.bool,borderColor:_propTypes2.default.string,borderWidth:_propTypes2.default.number,color:_propTypes2.default.string,children:_propTypes2.default.node,progress:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.instanceOf(_reactNative.Animated.Value)]),rotation:_propTypes2.default.instanceOf(_reactNative.Animated.Value),size:_propTypes2.default.number,style:RNViewPropTypes.style,unfilledColor:_propTypes2.default.string};ProgressPie.defaultProps={borderWidth:1,color:'rgba(0, 122, 255, 1)',progress:0,size:40};exports.default=


(0,_withAnimation2.default)(ProgressPie,0.2);