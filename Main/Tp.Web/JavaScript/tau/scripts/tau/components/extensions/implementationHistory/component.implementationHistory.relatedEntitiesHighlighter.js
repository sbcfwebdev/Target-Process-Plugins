define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(a,b,c){return c.extend({"bus afterRender":function(a){this._$relatedEntities=a.data.element.find(".tau-relatedEntities .tau-entity"),this._$relatedEntities.hover(b.proxy(this,"_onHoverIn"),b.proxy(this,"_onHoverOut"))},_getRelatedEntities:function(a){var c=b(a).data("entityInfo").id;return this._$relatedEntities.filter(function(){return c==b(this).data("entityInfo").id})},_onHoverIn:function(a){this._getRelatedEntities(a.currentTarget).addClass("tau-highlight")},_onHoverOut:function(a){this._getRelatedEntities(a.currentTarget).removeClass("tau-highlight")}})})