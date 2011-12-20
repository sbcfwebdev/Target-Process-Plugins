CodeMirror.defineMode("gfm",function(a,b){function f(a,b){return a.sol()&&a.match(/^```([\w+#]*)/)?(b.localMode=e(RegExp.$1),b.localMode&&(b.localState=b.localMode.startState()),b.token=g,"code"):c.token(a,b.mdState)}function g(a,b){return a.sol()&&a.match(/^```/)?(b.localMode=b.localState=null,b.token=f,"code"):b.localMode?b.localMode.token(a,b.localState):(a.skipToEnd(),"code")}function h(a,b){var d;if(a.match(/^\w+:\/\/\S+/))return"linkhref";if(a.match(/^[^\[*\\<>` _][^\[*\\<>` ]*[^\[*\\<>` _]/))return c.getType(b);if(d=a.match(/^[^\[*\\<>` ]+/)){var e=d[0];return e[0]==="_"&&e[e.length-1]==="_"?(a.backUp(e.length),undefined):c.getType(b)}if(a.eatSpace())return null}var c=CodeMirror.getMode(a,"markdown"),d={html:"htmlmixed",js:"javascript",json:"application/json",c:"text/x-csrc","c++":"text/x-c++src",java:"text/x-java",csharp:"text/x-csharp","c#":"text/x-csharp"},e=function(){var b,c={},e={},f,g=CodeMirror.listModes();for(b=0;b<g.length;b++)c[g[b]]=g[b];var h=CodeMirror.listMIMEs();for(b=0;b<h.length;b++)f=h[b].mime,e[f]=h[b].mime;for(var i in d)if(d[i]in c||d[i]in e)c[i]=d[i];return function(b){return c[b]?CodeMirror.getMode(a,c[b]):null}}();return{startState:function(){var a=c.startState();return a.text=h,{token:f,mode:"markdown",mdState:a,localMode:null,localState:null}},copyState:function(a){return{token:a.token,mode:a.mode,mdState:CodeMirror.copyState(c,a.mdState),localMode:a.localMode,localState:a.localMode?CodeMirror.copyState(a.localMode,a.localState):null}},token:function(a,b){return b.token(a,b)}}})