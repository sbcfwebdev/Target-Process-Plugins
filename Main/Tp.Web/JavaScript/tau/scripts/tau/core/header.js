define(["Underscore","tau/core/tau"],function(a,b){var c=a.extend(b,{ref:function(a,b){var c={};return c[a]=b,c},list:function(a,c){var d=b.ref(a,c);return d.list=!0,d},formatObject:function(b,c){var d=this;c=c?c:"Lower";var e=function(a){return a.charAt(0)["to"+c+"Case"]()+a.substr(1)};if(a.isArray(b)){var f=[];return a.each(b,function(a){f.push(d.formatObject(a,c))}),f}if(a.isUndefined(b)||a.isNull(b))return null;if(typeof b!="object")return b;var g={};return a.each(a.keys(b),function(f){var h=e(f),i=h.split("-");if(i.length>1){var j=[];a.each(i,function(a){j.push(e(a))}),h=j.join("-")}g[h]=d.formatObject(b[f],c)}),g},header:{getFieldName:function(b){return a.getFieldName(b)},isSimple:function(b){return a.isString(b)},isList:function(a){return a.list===!0}}});return c})