/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var e={703:(e,t,r)=>{"use strict";var o=r(414);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,s){if(s!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},408:(e,t)=>{"use strict";var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function s(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}function i(){}function p(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=s.prototype;var c=p.prototype=new i;c.constructor=p,n(c,s.prototype),c.isPureReactComponent=!0;Array.isArray;var f=Object.prototype.hasOwnProperty,u=null,l={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,o){var n,a={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)f.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=o;else if(1<p){for(var c=Array(p),y=0;y<p;y++)c[y]=arguments[y+2];a.children=c}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:r,type:e,key:s,ref:i,props:a,_owner:u}}},294:(e,t,r)=>{"use strict";e.exports=r(408)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}(()=>{"use strict";var e=r(294),t=r(697),o=function(t){var r=t.text;return e.createElement("button",null,r)};o.defaultProps={text:"Hello World"},o.propTypes={text:t.string.isRequired}})()})();