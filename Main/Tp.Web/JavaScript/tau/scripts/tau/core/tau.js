define(["tau/extensions/extension.javascript"],function(){var a=a||{};return a.empty=function(){},a.ns=function(a){var b=a.split("."),c=window;for(var d=0,e=b.length;d<e;d++){var f=b[d];typeof c[f]=="undefined"&&(c[f]={}),c=c[f]}},a.getValueFromQueryString=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)",c=new RegExp(b),d=c.exec(window.location.href);return d==null?"":d[1]},a.extendArgs=function(a,b){var c=a;return c=[].slice.call(a),c.unshift(b),c},a.concat=function(){return String.prototype.concat.apply("",arguments)},a.createScopedCallbackIfRequired=function(b){return typeof b=="function"?b:a.createScopedCallback(b.fn,b.scope)},a.createScopedCallback=function(a,b){return typeof a!="function"&&typeof a.fn=="function"&&(a=a.fn,a.scope&&(b=a.scope)),typeof a=="function"&&b&&(a=a.tauCreateDelegate(b)),a},a.getCallbacks=function(b){b=b||{},b.success||(b.success=a.empty),b.failure||(b.failure=a.empty);var c=a.createScopedCallback(b.success,b.scope),d=a.createScopedCallback(b.failure,b.scope);return{success:c,failure:d}},a})