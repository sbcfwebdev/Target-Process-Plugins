define(["Underscore"],function(a){var b=function(b,c){var d=[],e=[];a.forEach(b,function(a){a[0]=="~"?d.push(a.slice(1)):e.push(a)});var f=!0;e.length&&(f=a.intersect(c,e).length>0);var g=!1;return d.length&&(g=a.intersect(c,d).length>0),f&&!g?!0:!1},c=function(d,e){return a.forEach(d,function(f,g){if(f.type=="tabs")a.forEach(f.tabs,function(a,b){a.header=c(a.header,e),f.tabs[b].items=c(a.items,e),f.tabs[b].items.length==0&&(f.tabs[b]=!1)}),f.tabs=a.filter(f.tabs,function(a,b){return a!==!1}),f.additionalHeaders=c(f.additionalHeaders,e),f.tabs.length==0&&(d[g]=!1);else if(f.type=="additionalInfo")f.children=c(f.children,e),f.children.length==0&&(d[g]=!1);else if(f.type=="label"&&a.isArray(f.text))f.text=c(f.text,e),f.text.length==0?d[g]=!1:d[g]=f;else if(f.practices)f.practices.length&&b(f.practices,e)==0&&(d[g]=!1);else if(f.children)d[g].children=c(f.children,e);else if(typeof f.items!="undefined")d[g].items=c(f.items,e),f.items.length==0&&(d[g]=!1);else if(g=="children"||g=="items")d[g]=c(f,e)}),d=a.filter(d,function(a,b){return a!==!1}),d};return{convert:function(a,b){return a=c(a,b),a}}})