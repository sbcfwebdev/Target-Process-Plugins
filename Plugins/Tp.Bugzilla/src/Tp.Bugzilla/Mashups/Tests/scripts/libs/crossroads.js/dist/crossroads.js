/*!!
 * Crossroads - JavaScript Routes
 * Released under the MIT license <http://www.opensource.org/licenses/mit-license.php>
 * @author Miller Medeiros
 * @version 0.4
 * @build 31 (06/07/2011 12:15 AM)
 * ----------------------------------
 *
 * !!! WARNING: Patch for getParamIds method is added. Take into account when update to new version.
 *
 * ----------------------------------
 */
(function(a){function g(a,b){var c=a.length;while(c--)if(a[c]===b)return c;return-1}function h(a,b){return"[object "+a+"]"===e.call(b)}function i(a){return h("RegExp",a)}function j(a){return h("Array",a)}function k(a){return h("Function",a)}function l(a){return a===null?a:f.test(a)?a.toLowerCase()==="true":a===""||isNaN(a)?a:parseFloat(a)}var b,c,d,e=Object.prototype.toString,f=/^(true|false)$/i;b=function(){function f(a,b,d){var e=new c(a,b,d);return h(e),e}function h(b){var c=i();do--c;while(a[c]&&b._priority<=a[c]._priority);a.splice(c+1,0,b)}function i(){return a.length}function j(b){var c=k(b);c>=0&&a.splice(c,1),b._destroy()}function k(b){return g(a,b)}function l(){var b=i();while(b--)a[b]._destroy();a.length=0}function m(a){a=a||"";var c=n(a),d=c?o(a,c):null;c?(d?c.matched.dispatch.apply(c.matched,d):c.matched.dispatch(),e.dispatch(a,c,d)):b.dispatch(a)}function n(b){var c=i(),d;while(d=a[--c])if(d.match(b))return d;return null}function o(a,b){return d.getParamValues(a,b._matchRegexp)}var a=[],b=new signals.Signal,e=new signals.Signal;return{_routes:a,addRoute:f,removeRoute:j,removeAllRoutes:l,parse:m,bypassed:b,routed:e,getNumRoutes:i,toString:function(){return"[crossroads numRoutes:"+i()+"]"}}}(),c=function(a,b,c){var e=i(a);this._pattern=a,this._paramsIds=e?null:d.getParamIds(this._pattern),this._matchRegexp=e?a:d.compilePattern(a),this.matched=new signals.Signal,b&&this.matched.add(b,this),this._priority=c||0},c.prototype={rules:void 0,match:function(a){return this._matchRegexp.test(a)&&this._validateParams(a)},_validateParams:function(a){var b=this.rules,c;for(c in b)if(b.hasOwnProperty(c)&&!this._isValidParam(a,c))return!1;return!0},_isValidParam:function(a,b){var c=this.rules[b],d=this._getParamValuesObject(a),e=d[b],f;return i(c)?f=c.test(e):j(c)?f=g(c,e)!==-1:k(c)&&(f=c(e,a,d)),f||!1},_getParamValuesObject:function(a){var b=this._paramsIds,c=d.getParamValues(a,this._matchRegexp),e={},f=b?b.length:0;while(f--)e[b[f]]=c[f];return e.request_=l(a),e},dispose:function(){b.removeRoute(this)},_destroy:function(){this.matched.dispose(),this.matched=this._pattern=this._matchRegexp=null},toString:function(){return'[Route pattern:"'+this._pattern+'", numListeners:'+this.matched.getNumListeners()+"]"}},d=b.patternLexer=function(){function f(a){var b=[],d,e=new RegExp(c);while(d=e.exec(a))b.push(d[1]);return b}function g(a){return a=a?h(a):"",a=a.replace(/\/$/,""),a=j(a),a=i(a),new RegExp("^"+a+"/?$")}function h(a){return a.replace(c,d)}function i(a){return a.replace(e,b.source)}function j(b){return b.replace(a,"\\$&")}function k(a,b){var c=b.exec(a);return c&&(c.shift(),c=m(c)),c}function m(a){var b=a.length,c=[];while(b--)c[b]=l(a[b]);return c}var a=/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#]/g,b=/([^\/]+)/,c=/\{([^\}]+)\}/g,d="___CR_PARAM___",e=new RegExp(d,"g");return{getParamIds:f,getParamValues:k,compilePattern:g}}(),a.crossroads=b})(window||this)