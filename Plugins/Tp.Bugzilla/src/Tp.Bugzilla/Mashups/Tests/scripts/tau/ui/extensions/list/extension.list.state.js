define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/configurator"],function(a,b,c,d){return c.extend({initialState:{},"bus preDataBind":function(b){var c=b.data,e=d.getRouting().getStateParameter("list")||{},f=this;a.forEach(c.groups,function(b){var c=(new String(b.key)).toString();f.initialState[c]=b.collapsed,a.isUndefined(e[c])==0&&(b.collapsed=e[c])})},"bus afterInit+afterRender":function(a){this.$el=a.afterRender.data.element},"bus stateChanged":function(c){var d=this.$el.find("[role=group]"),e={},f=this;d.each(function(){var c=b(this),d=c.hasClass("tau-list__group_collapsed_true"),g=c.data("tmplItem").data,h=(new String(g.key)).toString();a.isUndefined(f.initialState[h])==0&&f.initialState[h]!==d&&(e[h]=d)}),f.bus.getGlobalBus().fire("routing.setState",{list:e})}})})