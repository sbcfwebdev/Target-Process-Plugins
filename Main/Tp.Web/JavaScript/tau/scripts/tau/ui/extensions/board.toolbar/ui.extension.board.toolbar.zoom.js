define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(_,$,ExtensionBase){return ExtensionBase.extend({"bus afterRender":function(evt){var $element=evt.data.element,$zoomer=$element.find("[role=zoomer]"),config={max:$zoomer.data("zoomMax"),min:$zoomer.data("zoomMin"),animate:!0,change:_.bind(this.onSliderChange,this),value:$zoomer.data("zoomValue")};$zoomer.slider(config)},onSliderChange:function(event,ui){var self=this;self.bus.fire("zoom.updated",{value:ui.value})},"bus afterRender:last+zoom.provided":function(evt){var $element=_.values(evt)[0].data.element,data=_.values(evt)[1].data,$zoomer=$element.find("[role=zoomer]"),prevValue=$zoomer.slider("value");prevValue!=data.value&&$zoomer.slider("value",data.value)}})})