CodeMirror.braceRangeFinder=function(a,b){var c=a.getLine(b),d=c.lastIndexOf("{");if(d<0||c.lastIndexOf("}")>d)return;var e=a.getTokenAt({line:b,ch:d}).className,f=1,g=a.lineCount(),h;i:for(var j=b+1;j<g;++j){var k=a.getLine(j),l=0;for(;;){var m=k.indexOf("{",l),n=k.indexOf("}",l);m<0&&(m=k.length),n<0&&(n=k.length),l=Math.min(m,n);if(l==k.length)break;if(a.getTokenAt({line:j,ch:l+1}).className==e)if(l==m)++f;else if(!--f){h=j;break i}++l}}if(h==null||h==b+1)return;return h},CodeMirror.newFoldFunction=function(a,b){function d(a,b){for(var d=0;d<c.length;++d){var e=a.lineInfo(c[d].start);if(!e)c.splice(d--,1);else if(e.line==b)return{pos:d,start:e.line,end:e.line+c[d].size}}}var c=[];return b==null&&(b='<span style="color:#600">&#x25bc;</span>%N%'),function(e,f){e.operation(function(){var g=d(e,f);if(g){c.splice(g.pos,1),e.clearMarker(g.start);var h=[];for(var i=g.start;i<g.end;++i){h.length||e.showLine(i),i==h[0]&&h.shift();var j=d(e,i);j&&h.unshift(j.end-1)}}else{var k=a(e,f);if(k==null)return;for(var i=f+1;i<k;++i)e.hideLine(i);var l=e.setMarker(f,b);c.push({start:l,size:k-f})}})}}