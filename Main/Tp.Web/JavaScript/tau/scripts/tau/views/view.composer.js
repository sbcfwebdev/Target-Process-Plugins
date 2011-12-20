define(["Underscore","jQuery","tau/core/view-base","tau/core/event-dispatcher"],function(a,b,c,d){var e=c.extend({init:function(a){this._loaded=!1,this._super(a)},initialize:function(){var b=this,c=b.config.children,d=a.size(c)>0&&b.config.visible;if(d){var e=b.config.children,f=b.config.context||{};this.fire("createComponents",{components:e,context:f})}else b._super.apply(b,arguments),b._fireChildrenRendered({children:[],childrenEvtArgs:[]})},"bus componentCreated":function(a){var b=a.data.component;this.fire("childComponentCreated",b)},"bus componentsCreated":function(a){this.fire("beforeComponentsInitialize",a.data),this.initializeChildrenComponents(a),this.fire("afterComponentsInitialize",a.data)},initializeChildrenComponents:function(b){var c=this,e=a(b.data).pluck("component"),f=a(b.data).pluck("config");c.dispatcher=new d(e),c.dispatcher.listen("afterInit",function(a){c.fireAfterInit()}),c.dispatcher.listen("afterRender",function(a){var b=a.argsArr,d={children:e,childrenEvtArgs:b};c._fireChildrenRendered(d)}),a(e).each(function(a,b){a.fire("initialize",f[b])})},_fireChildrenRendered:function(a){this.fire("internalChildrenRendered",a)},"bus afterInit+dataBind":function(a){},"bus afterInit+dataBind+internalChildrenRendered":function(c){this.destroyChildComponents();var d=this,e=c.afterInit.data,f=c.dataBind.data,g=c.internalChildrenRendered.data;d.children=g.children,d.config.visible&&(d._loaded=!0);if(g.children.length===0)d.render(f,e);else{d.fireBeforeRender({data:f});var h=d.bindTemplate(f);h.find("[runas]").each(function(c,d){var e=b(this),f=e.attr("runas"),h=e.attr("componentId"),i=a(g.childrenEvtArgs).detect(function(a,b){var c=a.view.config;return c.type===f&&c.id.toString()===h});if(!i){var k='Component "'+h+'" type of ['+f+"] not found";throw k}var j=i.element;e.replaceWith(j)}),h=d.prepareElement(h),d.fire("childrenRendered",g.children),d.updateElement(h,e.refreshSelector),!d.config.visible&&d.hide(),d.fireAfterRender({data:f})}},"bus show":function(){this._super(),this._loaded||this.fire("initialize",{})},lifeCycleCleanUp:function(){this._super()},destroyChildComponents:function(){delete this.dispatcher;var a=null;if(this.children&&this.children.length)while(a=this.children.pop())a.destroy();delete this.children},destroy:function(){this.destroyChildComponents(),this._super()}});return e})