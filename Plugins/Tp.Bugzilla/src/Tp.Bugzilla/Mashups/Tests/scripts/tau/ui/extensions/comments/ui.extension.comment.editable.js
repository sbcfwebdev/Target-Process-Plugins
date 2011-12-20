define(["Underscore","jQuery","tau/configurator","tau/components/extensions/component.extension.base","tau/ui/templates/comments/ui.template.comments.comment","tau/ui/behaviour/common/ui.behaviour.richeditor"],function(a,b,c,d,e){var f=d.extend({category:"edit",destroy:function(){this.destroyDynamicComponents(),this._super()},lifeCycleCleanUp:function(){this.destroyDynamicComponents(),this._super()},destroyDynamicComponents:function(){var a=this;a.componentList&&(a.componentList.destroy(),delete a.componentList)},"bus applyTo+permissionsReady":function(a){var b=a.applyTo.data,c=a.permissionsReady.data;this.applyPermissions(b.config,b.data,b.element,c)},applyPermissions:function(c,d,e,f){var g=this,h=this.config=a.extend({},c,{comment:d}),i=this.element=e,j=b('<li class="ui-comment-menu button-group"></li>'),k=i.children(".ui-comment-body");if(f.editable){k.addClass("editable");var l=g.onReply.tauCreateDelegate(g);j.append(b('<a class="reply button small"><span class="icon"></span>reply</a>').click(l));var m=g.onEdit.tauCreateDelegate(g);j.append(b('<a class="edit button small"><span class="icon"></span>edit</a>').click(m)),b(['<div class="ui-comment-reply">','   <div class="ui-editor-placeholder" style="display: none;"></div>',"</div>"].join("")).insertAfter(k.find(".ui-comment-text"))}if(f.deletable){var n=g.onDelete.tauCreateDelegate(g);j.append(b('<a class="delete button danger small"><span class="icon"></span>delete</a>').click(n)),k.addClass("deletable")}k.find(".ui-comment-heading").append(j);var o=i.children(".ui-comments"),p={components:[{type:"commentList"}],context:h.context};this.componentList||this.createComponents(p,function(b){var c=b[0],e={element:o,data:{comments:d.comments||[]},config:a.extend({},c.config,{commentId:g.config.comment.id})};g.componentList=c.component,c.component.fire("applyTo",e)})},showEditorForEdit:function(){var a=this,b=this.element.find("> .ui-comment-body > .ui-comment-text"),c=this.element.tmplItem().data;this.showEditor({element:b,text:c.description,saveHandler:function(b){a.fire("saveComment",{description:b})}})},showEditorForReply:function(){var a=this,b=this.element.find("> .ui-comment-body > .ui-comment-reply > .ui-editor-placeholder"),c=this.element.tmplItem().data;a.showEditor({element:b,text:"",hideTarget:!1,saveText:"Add Reply",saveHandler:function(b){a.fire("replyToComment",{description:b,parentId:c.id})}})},showEditor:function(a){var b=this,c=function(){b.fire("editorSave"),a.saveHandler.apply(this,arguments)},d=a.element,e=d.richeditor({text:a.text,hideTarget:a.hideTarget!==!1,executionGroupName:"comments",onSave:c,validation:{trim:!0},settings:{toolbar:[["Bold","Italic","Strike"],["NumberedList","BulletedList"],["Link","Unlink"],["Image"],["Source"]],startupFocus:!0,extraPlugins:""},saveAction:{text:a.saveText||"Save",disableIfEmpty:!0},cancelAction:{available:!0}}),f=e.richeditor("showEditor");this.fire("editorCreated",{editorElement:f})},onReply:function(a){var b=this;a.stopPropagation(),a.preventDefault(),b.showEditorForReply()},onEdit:function(a){var b=this;a.stopPropagation(),a.preventDefault(),b.showEditorForEdit()},onDelete:function(a){a.stopPropagation(),a.preventDefault(),this.fire("deleteComment")}});return f})