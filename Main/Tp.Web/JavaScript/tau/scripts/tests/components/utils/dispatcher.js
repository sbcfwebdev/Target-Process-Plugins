define(["Underscore","tau/core/event"],function(a,b){var c=function(c,d){var e={order:[],args:{},counts:{},initEvt:function(a){this.counts.hasOwnProperty(a)||(this.counts[a]=0)},regEvt:function(a,b){this.order.push(a),this.counts[a]=1+this.counts[a],this.args[a]=b}},f={bus:c};return a.each(d,function(a){e.initEvt(a),f["bus "+a+" 1"]=function(b){e.regEvt(a,b.data)}}),b.subscribeOn(f),e},d=function(b,c,d){a.each(b,function(a){equals(c.counts[a],1,"Count of event '"+a+"' is valid for "+d)})},e=function(a,c,d,e){var f={bus:a,"bus afterInit":function(){equals(e.counts.afterInit,0,"no after init for container")},"bus initialize":function(a){var b=a.data,e=c;e.context=d,same(b,e,"Initialization config for first component")},"bus afterRender":function(){equals(e.counts.afterRender,0,"no after render for container")}};b.subscribeOn(f)};return{createDispatcher:c,verifyLifeCycle:d,dispatchChild:e}})