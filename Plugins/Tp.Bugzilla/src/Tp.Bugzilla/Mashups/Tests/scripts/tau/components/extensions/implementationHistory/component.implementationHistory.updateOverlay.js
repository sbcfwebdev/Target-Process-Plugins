define(["tau/components/extensions/component.extension.base","tau/ui/behaviour/overlay/ui.behaviour.overlay"],function(a){return a.extend({"bus afterRender":function(a){this._$element=a.data.element},"bus afterUpdate":function(a){this._$element.tauOverlay(),this.fire("refresh")}})})