define([],function(){Object.keys||(Object.keys=function(){var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!{toString:null}.propertyIsEnumerable("toString"),dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;return function(obj){if(typeof obj!="object"&&typeof obj!="function"||obj===null)throw new TypeError("Object.keys called on non-object");var result=[];for(var prop in obj)hasOwnProperty.call(obj,prop)&&result.push(prop);if(hasDontEnumBug)for(var i=0;i<dontEnumsLength;i++)hasOwnProperty.call(obj,dontEnums[i])&&result.push(dontEnums[i]);return result}}());var s4=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return{countDown:function(expectedCallsCount,callback){var actualCallsCount=0;return function(){callback&&(expectedCallsCount==0||++actualCallsCount==expectedCallsCount)&&callback()}},guid:function(){return s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4()}}})