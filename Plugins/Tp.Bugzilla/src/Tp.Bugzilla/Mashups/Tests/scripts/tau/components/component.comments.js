define(["Underscore","tau/components/component.list.creator","tau/components/extensions/component.creator.extension","tau/models/model.comments","tau/models/model.comments.editable","tau/ui/extensions/ui.extension.shortcutProcessor","tau/ui/extensions/comments/ui.extension.comments.editable","tau/ui/extensions/comments/ui.extension.comments.add","tau/ui/templates/comments/ui.template.comments"],function(a,b,c,d,e,f,g,h,i){return{create:function(j){var k={extensions:a.concat([d,e,f,g,h,c,j.extensions]),template:i,showEmptyMessage:!1};return j.shortcutProcessorTarget=".ui-comment-text",b.create(k,j)}}})