define(["tau/components/component.creator","tau/models/finder.requesters/model.generalUser.finder","tau/models/finder.requesters/model.generalUser.editor","tau/ui/extensions/finder.requesters/ui.extension.finder.requesters.list","tau/ui/extensions/finder.requesters/ui.extension.finder.requesters.filter","tau/ui/templates/finder.requesters/ui.template.finder","tau/ui/templates/finder.requesters/ui.template.finder.resultList"],function(a,b,c,d,e,f,g){return{create:function(h){var i={name:"finder",extensions:[b,c,d,e],template:f};return h.templateList=g,a.create(i,h)}}})