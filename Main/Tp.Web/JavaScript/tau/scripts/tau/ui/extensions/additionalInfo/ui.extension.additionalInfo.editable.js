define(["Underscore","tau/components/extensions/component.extension.base"],function(a,b){var c=b.extend({category:"edit","bus afterRender+permissionsReady":function(a){this.element=a.afterRender.data.element;var b=a.permissionsReady.data},"bus prepareChanges":function(b){var c=b.data,d=a(c).chain().keys().map(function(a){return"TR.ui-info-"+a.toLowerCase()}).value(),e=this.element.find(d.join(","));e.length&&(this.element.tauOverlay(),this.fire("markElementToBeUpdated",{element:e}))},"bus applyChanges":function(b){var c=b.data,d=a(c).chain().keys().map(function(a){return"TR.ui-info-"+a.toLowerCase()}).value(),e=d.join(","),f=this.element.find(e);this.on("afterRender",function(a){a.removeListener();var b=a.data.element.find(e);b.length&&this.fire("updateElement",{element:b})}),f.length&&this.fire("refresh")}});return c})