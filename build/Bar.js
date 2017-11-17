'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Bar.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






var INDETERMINATE_WIDTH_FACTOR=0.3;
var BAR_WIDTH_ZERO_POSITION=INDETERMINATE_WIDTH_FACTOR/(1+INDETERMINATE_WIDTH_FACTOR);

var RNViewPropTypes=_reactNative.ViewPropTypes||_reactNative.View.propTypes;var

ProgressBar=function(_Component){_inherits(ProgressBar,_Component);


































function ProgressBar(props){_classCallCheck(this,ProgressBar);var _this=_possibleConstructorReturn(this,(ProgressBar.__proto__||Object.getPrototypeOf(ProgressBar)).call(this,
props));_this.






























































handleLayout=function(event){
if(!_this.props.width){
_this.setState({width:event.nativeEvent.layout.width});
}
if(_this.props.onLayout){
_this.props.onLayout(event);
}
};var progress=Math.min(Math.max(props.progress,0),1);_this.state={width:0,progress:new _reactNative.Animated.Value(props.indeterminate?INDETERMINATE_WIDTH_FACTOR:progress),animationValue:new _reactNative.Animated.Value(BAR_WIDTH_ZERO_POSITION)};return _this;}_createClass(ProgressBar,[{key:'componentDidMount',value:function componentDidMount(){if(this.props.indeterminate){this.animate();}}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(props){if(props.indeterminate!==this.props.indeterminate){if(props.indeterminate){this.animate();}else{_reactNative.Animated.spring(this.state.animationValue,{toValue:BAR_WIDTH_ZERO_POSITION,useNativeDriver:props.useNativeDriver}).start();}}if(props.indeterminate!==this.props.indeterminate||props.progress!==this.props.progress){var progress=props.indeterminate?INDETERMINATE_WIDTH_FACTOR:Math.min(Math.max(props.progress,0),1);if(props.animated){var _props=this.props,animationType=_props.animationType,animationConfig=_props.animationConfig;_reactNative.Animated[animationType](this.state.progress,_extends({},animationConfig,{toValue:progress,useNativeDriver:props.useNativeDriver})).start();}else{this.state.progress.setValue(progress);}}}},{key:'animate',value:function animate(){var _this2=this;this.state.animationValue.setValue(0);_reactNative.Animated.timing(this.state.animationValue,{toValue:1,duration:1000,easing:_reactNative.Easing.linear,isInteraction:false,useNativeDriver:this.props.useNativeDriver}).start(function(endState){if(endState.finished){_this2.animate();}});}},{key:'render',value:function render()

{var _props2=











this.props,borderColor=_props2.borderColor,borderRadius=_props2.borderRadius,borderWidth=_props2.borderWidth,children=_props2.children,color=_props2.color,height=_props2.height,style=_props2.style,unfilledColor=_props2.unfilledColor,width=_props2.width,restProps=_objectWithoutProperties(_props2,['borderColor','borderRadius','borderWidth','children','color','height','style','unfilledColor','width']);

var innerWidth=Math.max(0,width||this.state.width)-borderWidth*2;
var containerStyle={
width:width,
borderWidth:borderWidth,
borderColor:borderColor||color,
borderRadius:borderRadius,
overflow:'hidden',
backgroundColor:unfilledColor};

var progressStyle={
backgroundColor:color,
height:height,
transform:[{
translateX:this.state.animationValue.interpolate({
inputRange:[0,1],
outputRange:[innerWidth*-INDETERMINATE_WIDTH_FACTOR,innerWidth]})},

{
translateX:this.state.progress.interpolate({
inputRange:[0,1],
outputRange:[innerWidth/-2,0]})},

{

scaleX:this.state.progress.interpolate({
inputRange:[0,1],
outputRange:[0.0001,1]})}]};




return(
_react2.default.createElement(_reactNative.View,_extends({style:[containerStyle,style],onLayout:this.handleLayout},restProps,{__source:{fileName:_jsxFileName,lineNumber:169}}),
_react2.default.createElement(_reactNative.Animated.View,{style:progressStyle,__source:{fileName:_jsxFileName,lineNumber:170}}),
children));


}}]);return ProgressBar;}(_react.Component);exports.default=ProgressBar;