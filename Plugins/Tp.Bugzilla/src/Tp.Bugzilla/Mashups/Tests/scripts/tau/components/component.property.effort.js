define(["tau/components/component.creator","tau/models/model.property.effort","tau/models/model.property.effort.editable","tau/components/extensions/bubble/extensions.bubble.creator","tau/components/extensions/component.creator.extension","tau/ui/extensions/effort/extension.effort.editable","tau/ui/extensions/ui.extension.tooltip","tau/ui/templates/property.effort/ui.template.property.effort"],function(a,b,c,d,e,f,g,h){return{create:function(i){var j={extensions:[b,c,f,d,e,g],template:h};return a.create(j,i)}}})