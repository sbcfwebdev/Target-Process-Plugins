define(["Underscore","jQuery","tau/core/extension.base"],function(_,$,ExtensionBase){return ExtensionBase.extend({"bus $el.ready":function(evt,$el){var self=this;$el.delegate("input[name=filter]","keyup",function(){self.fire("filter.changed",$(this).val())}),$el.delegate("input[name=filter]","keydown",function(e){e.keyCode==$.ui.keyCode.ESCAPE&&e.stopPropagation(),e.which==$.ui.keyCode.ENTER&&$(this).trigger("blur")})},match:function(source,filter){var index=source.toLowerCase();return filter.length==0||_.any(filter,function(v){return index.indexOf(v)>=0})},"bus $el.ready:last + filter.changed":function(evt,$el,text){var filterIndex=_.trim(text).toLowerCase().split(/\s+/g),match=this.match,$items=$el.find(".i-role-tag"),found=0;_.trim(text).length>0?($items.each(function(){var $item=$(this),itemText=$item.text(),matched=match(itemText,filterIndex);matched&&(found+=1),$item.toggleClass("tau-tags-cloud__item_filtered_false",!matched),$item.toggleClass("tau-tags-cloud__item_filtered_true",matched)}),$el.toggleClass("tau-tags-cloud_filtered_none",found==0)):($el.toggleClass("tau-tags-cloud_filtered_none",!1),$items.toggleClass("tau-tags-cloud__item_filtered_false",!1),$items.toggleClass("tau-tags-cloud__item_filtered_true",!1)),this.fire("filter.completed")}})})