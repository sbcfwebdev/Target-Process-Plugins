define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(a,b,c){var d={create:function(a,c){return b("<div/>").addClass(this._createClassName(a,c)).attr("title",this._createTitle(a,c)).data("entityInfo",{id:a.id,type:a.type,alias:a.alias||a.type}).click(this._onRelatedEntityClick)},_createTitle:function(a,b){var c=["["+(a.alias||a.type)+"]"," #"+a.id,a.name,b?"(closed)":"(added)"].join(" ");return c},_createClassName:function(a,b){var c=["tau-entity","tau-"+a.type.toLowerCase(),b?"tau-closed":""].join(" ");return c},_onRelatedEntityClick:function(a){var c=b(this).data("entityInfo");c&&location.assign("#"+c.type+"/"+c.id)}};return c.extend({"bus afterRender":function(a){this._$element=a.data.element,this._data=a.data.data,this._render()},_render:function(){var b=this._$element.find(".tau-historyGrid .tau-historyItem");a.each(this._data.historyItems,function(c,e){var f=b.eq(e).find(".tau-relatedEntities");c.relatedEntities&&(a.each(c.relatedEntities.opened,function(a){f.append(d.create(a))}),a.each(c.relatedEntities.closed,function(a){f.append(d.create(a,!0))}))})}})})