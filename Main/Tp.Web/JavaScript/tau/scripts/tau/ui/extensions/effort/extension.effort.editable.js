define(["tau/components/extensions/component.extension.base","tau/ui/templates/assignmentsList/ui.template.assignments.effortsOnly","tau/ui/behaviour/common/ui.behaviour.editableText"],function(a,b){return a.extend({category:"edit",normalizeEffort:function(a){return Math.abs(Math.round(parseFloat(a)*100)/100)||0},"bus afterRender+beforeChangeProperty":function(a){var b=a.afterRender.data.element;this.fire("markElementToBeUpdated",{element:b})},"bus propertyChanged":function(a){this.fire("refresh")},"bus refresh+afterRender":function(a){var b=a.afterRender.data.element;this.fire("updateElement",{element:b})},hasEffortIterator:function(a){return a.role.hasEffort},"bus permissionsReady+dataBind+afterRender":function(a){var c=this,d=a.permissionsReady.data,e=a.dataBind.data;if(d.editable){var f=_(e.roleEfforts).chain().select(c.hasEffortIterator).size().value();d.editMode=f===1&&c.config.entitiesCount==0?"inline":"roleEfforts";var g=a.afterRender.data.element,h=g.find(".entity-effort");if(d.editMode==="inline")h.editableText({mask:/^\d*\.?\d*$/,restoreText:!0,onSave:function(a){var b=c.normalizeEffort(a),d=_(e.roleEfforts).detect(c.hasEffortIterator),f={typeName:"roleEffort",id:d.id,$set:{effort:b}};c.bus.fire("save",f)},onEditStart:function(){c._$additionalInfo=h.find(".entity-effort-info").detach()},onEditEnd:function(){c._$additionalInfo.appendTo(h)}});else{var i={components:[{type:"assignmentsList",template:b}],context:c.config.context},j={target:h,componentsConfig:i};c.fire("initBubble",j)}}}})})