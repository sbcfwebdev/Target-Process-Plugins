(function(){function a(a){var b={},c=a.split(" ");for(var d=0;d<c.length;++d)b[c[d]]=!0;return b}function b(a){return function(b,c){return b.match(a)?c.tokenize=null:b.skipToEnd(),"string"}}var c={name:"clike",keywords:a("abstract and array as break case catch cfunction class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw try use var while xor returndie echo empty exit eval include include_once isset list require require_once print unset"),blockKeywords:a("catch do else elseif for foreach if switch try while"),atoms:a("true false null TRUE FALSE NULL"),multiLineStrings:!0,hooks:{$:function(a,b){return a.eatWhile(/[\w\$_]/),"variable-2"},"<":function(a,c){return a.match(/<</)?(a.eatWhile(/[\w\.]/),c.tokenize=b(a.current().slice(3)),c.tokenize(a,c)):!1},"#":function(a,b){return a.skipToEnd(),"comment"}}};CodeMirror.defineMode("php",function(a,b){function h(a,b){if(b.curMode==d){var c=d.token(a,b.curState);return c=="meta"&&/^<\?/.test(a.current())?(b.curMode=g,b.curState=b.php,b.curClose=/^\?>/,b.mode="php"):c=="tag"&&a.current()==">"&&b.curState.context&&(/^script$/i.test(b.curState.context.tagName)?(b.curMode=e,b.curState=e.startState(d.indent(b.curState,"")),b.curClose=/^<\/\s*script\s*>/i,b.mode="javascript"):/^style$/i.test(b.curState.context.tagName)&&(b.curMode=f,b.curState=f.startState(d.indent(b.curState,"")),b.curClose=/^<\/\s*style\s*>/i,b.mode="css")),c}return a.match(b.curClose,!1)?(b.curMode=d,b.curState=b.html,b.curClose=null,b.mode="html",h(a,b)):b.curMode.token(a,b.curState)}var d=CodeMirror.getMode(a,"text/html"),e=CodeMirror.getMode(a,"text/javascript"),f=CodeMirror.getMode(a,"text/css"),g=CodeMirror.getMode(a,c);return{startState:function(){var a=d.startState();return{html:a,php:g.startState(),curMode:b.startOpen?g:d,curState:b.startOpen?g.startState():a,curClose:b.startOpen?/^\?>/:null,mode:b.startOpen?"php":"html"}},copyState:function(a){var b=a.html,c=CodeMirror.copyState(d,b),e=a.php,f=CodeMirror.copyState(g,e),h;return a.curState==b?h=c:a.curState==e?h=f:h=CodeMirror.copyState(a.curMode,a.curState),{html:c,php:f,curMode:a.curMode,curState:h,curClose:a.curClose}},token:h,indent:function(a,b){return a.curMode!=g&&/^\s*<\//.test(b)||a.curMode==g&&/^\?>/.test(b)?d.indent(a.html,b):a.curMode.indent(a.curState,b)},electricChars:"/{}:"}}),CodeMirror.defineMIME("application/x-httpd-php","php"),CodeMirror.defineMIME("application/x-httpd-php-open",{name:"php",startOpen:!0}),CodeMirror.defineMIME("text/x-php",c)})()