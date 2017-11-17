'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Shapes/Arc.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var CIRCLE=Math.PI*2;

function makeArcPath(x,y,startAngleArg,endAngleArg,radius,direction){
var startAngle=startAngleArg;
var endAngle=endAngleArg;
if(endAngle-startAngle>=CIRCLE){
endAngle=CIRCLE+endAngle%CIRCLE;
}else{
endAngle=endAngle%CIRCLE;
}
startAngle=startAngle%CIRCLE;
var angle=startAngle>endAngle?CIRCLE-startAngle+endAngle:endAngle-startAngle;

if(angle>=CIRCLE){
return _reactNative.ART.Path().
moveTo(x+radius,y).
arc(0,radius*2,radius,radius).
arc(0,radius*-2,radius,radius).
close();
}

var directionFactor=direction==='counter-clockwise'?-1:1;
endAngle*=directionFactor;
startAngle*=directionFactor;
var startSine=Math.sin(startAngle);
var startCosine=Math.cos(startAngle);
var endSine=Math.sin(endAngle);
var endCosine=Math.cos(endAngle);

var arcFlag=angle>Math.PI?1:0;
var reverseFlag=direction==='counter-clockwise'?0:1;

return'M'+(x+radius*(1+startSine))+' '+(y+radius-radius*startCosine)+'\n          A'+
radius+' '+radius+' 0 '+arcFlag+' '+reverseFlag+' '+(x+radius*(1+endSine))+' '+(y+radius-radius*endCosine);
}var

Arc=function(_Component){_inherits(Arc,_Component);function Arc(){_classCallCheck(this,Arc);return _possibleConstructorReturn(this,(Arc.__proto__||Object.getPrototypeOf(Arc)).apply(this,arguments));}_createClass(Arc,[{key:'render',value:function render()





















{var _props=









this.props,startAngle=_props.startAngle,endAngle=_props.endAngle,radius=_props.radius,offset=_props.offset,direction=_props.direction,strokeCap=_props.strokeCap,strokeWidth=_props.strokeWidth,restProps=_objectWithoutProperties(_props,['startAngle','endAngle','radius','offset','direction','strokeCap','strokeWidth']);

var path=makeArcPath(
offset.left||0,
offset.top||0,
startAngle,
endAngle,
radius,
direction);


return(
_react2.default.createElement(_reactNative.ART.Shape,_extends({
d:path,
strokeCap:strokeCap,
strokeWidth:strokeWidth},
restProps,{__source:{fileName:_jsxFileName,lineNumber:87}})));


}}]);return Arc;}(_react.Component);Arc.propTypes={startAngle:_propTypes2.default.number.isRequired,endAngle:_propTypes2.default.number.isRequired,radius:_propTypes2.default.number.isRequired,offset:_propTypes2.default.shape({top:_propTypes2.default.number,left:_propTypes2.default.number}),strokeCap:_propTypes2.default.string,strokeWidth:_propTypes2.default.number,direction:_propTypes2.default.oneOf(['clockwise','counter-clockwise'])};Arc.defaultProps={startAngle:0,offset:{top:0,left:0},strokeCap:'butt',strokeWidth:0,direction:'clockwise'};exports.default=Arc;