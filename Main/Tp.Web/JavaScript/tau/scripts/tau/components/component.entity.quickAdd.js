define(["tau/components/component.creator","tau/models/entity.quickAdd/model.entity.quickAdd.templates","tau/models/entity.quickAdd/model.entity.quickAdd.add","tau/ui/extensions/board.cell.quick.add/ui.extension.board.cell.quick.add","tau/components/extensions/bubble/extension.bubble.creator","tau/components/extensions/component.creator.extension","tau/ui/extensions/container/ui.extension.container.childrenEvents","tau/components/extensions/error/extension.errorBar","tau/views/view.compositeControl","tau/ui/templates/board.add/ui.template.board.quick.add"],function(Creator,ModelMain,ModelAdd,ExtensionMain,BubbleExtension,CreatorExtension,ChildrenEventsExtension,ErrorExtension,ViewExtension,Template){return{create:function(config){var extensions=[ModelMain,ModelAdd,ExtensionMain,BubbleExtension,CreatorExtension,ChildrenEventsExtension,ErrorExtension],creatorConfig={ViewType:ViewExtension,name:"entity.quickAdd",extensions:extensions,template:Template};return config["queue.bus"]=!0,config.dependencies=["finder.entity"],Creator.create(creatorConfig,config)}}})