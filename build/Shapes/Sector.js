'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Shapes/Sector.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var CIRCLE=Math.PI*2;

function makeSectorPath(x,y,angle,radius){
if(angle>=CIRCLE){
return _reactNative.ART.Path().
moveTo(x,y).
move(radius,0).
arc(0,radius*2,radius,radius).
arc(0,radius*-2,radius,radius).
close();
}

var startAngle=Math.PI/2-angle;
var endAngle=Math.PI/2;
var arcFlag=angle>Math.PI?1:0;
var centerX=x+radius;
var centerY=y+radius;

return'M'+centerX+' '+centerY+'\n          L'+(
centerX+Math.cos(startAngle)*radius)+' '+(centerY-Math.sin(startAngle)*radius)+'\n          A'+
radius+' '+radius+' 0 '+arcFlag+' 0 '+(centerX+Math.cos(endAngle)*radius)+' '+(centerY-Math.sin(endAngle)*radius)+'\n          L'+
centerX+' '+centerY;
}var

Sector=function(_Component){_inherits(Sector,_Component);function Sector(){_classCallCheck(this,Sector);return _possibleConstructorReturn(this,(Sector.__proto__||Object.getPrototypeOf(Sector)).apply(this,arguments));}_createClass(Sector,[{key:'render',value:function render()













{var _props=
this.props,angle=_props.angle,radius=_props.radius,offset=_props.offset,restProps=_objectWithoutProperties(_props,['angle','radius','offset']);
var path=makeSectorPath(
offset.left||0,
offset.top||0,
angle,
radius);

return(
_react2.default.createElement(_reactNative.ART.Shape,_extends({d:path},restProps,{__source:{fileName:_jsxFileName,lineNumber:54}})));

}}]);return Sector;}(_react.Component);Sector.propTypes={angle:_propTypes2.default.number.isRequired,radius:_propTypes2.default.number.isRequired,offset:_propTypes2.default.shape({top:_propTypes2.default.number,left:_propTypes2.default.number})};Sector.defaultProps={offset:{top:0,left:0}};exports.default=Sector;