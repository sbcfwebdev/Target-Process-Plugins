define(["tau/core/class","tau/core/event"],function(a,b){var c=function(){},d=a.extend({init:function(a){this.bus=a.bus,b.subscribeOn(this)},"bus refresh":function(a){this.lifeCycleCleanUp()},lifeCycleCleanUp:c,on:function(){this.bus.on.apply(this.bus,arguments)},fire:function(){return this.bus.fire.apply(this.bus,arguments)},"bus destroy":function(){this.on=c,this.fire=c,this.destroy()},destroy:function(){var a=this.bus.getGlobalBus();a&&a.removeAllListeners(this),b.unSubscribe(this),delete this.bus}});return d})