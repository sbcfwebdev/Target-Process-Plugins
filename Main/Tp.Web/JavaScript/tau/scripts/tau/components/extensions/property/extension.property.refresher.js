define(["Underscore","tau/components/extensions/component.extension.base"],function(a,b){return b.extend({category:"refresher","bus propertyChanged":function(){this.fire("refresh")}})})