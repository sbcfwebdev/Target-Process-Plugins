define(["Underscore","tau/core/class","tau/core/event","order!libs/crossroads.js/dist/js-signals","order!libs/crossroads.js/dist/crossroads"],function(a,b,c){var d=b.extend({init:function(){this.stack=[],this.current=null},size:function(){return this.stack.length},push:function(a){var b=a;return b.index=this.stack.length,this.stack.push(b),this},pop:function(){var a=this.stack.pop();return a},rewindTo:function(a){var b=this.stack.length;for(var c=b-1;c>=0;c--){var d=this.stack[c];d.index>a&&this.stack.pop()}return this},setCurrent:function(a){this.current=a},getCurrent:function(){return this.current},process:function(){this.current&&this.stack.push(a.clone(this.current)),this.current=null},updateCurrent:function(a){this.current&&(this.current.url=a.url||this.current.url,this.current.title=a.title||this.current.title,this.current.id=a.id||this.current.id)},exclude:function(b){this.stack=a.reject(this.stack,function(a,c){return a.id&&a.id==b}),this.current.id===b&&(this.current=null)}});return c.implementOn(d.prototype),d})