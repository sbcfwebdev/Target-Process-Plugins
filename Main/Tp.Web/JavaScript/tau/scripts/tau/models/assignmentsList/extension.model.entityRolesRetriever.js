define(["Underscore","tau/models/extension.model.base"],function(a,b){return b.extend({category:"model entity roles retriever extension","bus registerStoreRequest":function(){var a=this.config.context.entity||{entityType:{}},b={role:["id","name","isPair","hasEffort"]};this.fire("get",{type:a.entityType.name,query:{id:a.id,fields:[{roleEfforts:["id","effort","effortToDo",b,{assignable:["id"]}],list:!0}]},callback:{scope:this,success:this.onRoleEffortsRetrieved}})},"bus userGroupWasCreated":function(b){var c=b.data||{},d=c.role||{};if(d.hasEffort){var e=this.entity.roleEfforts;a.each(e,function(a){if(a.role.id==d.id)return c.roleEffort={effort:this.floatToString(a.effort),remain:this.floatToString(a.effortToDo),id:a.id},!0},this),this.fire("roleEffortsReady",e)}else c.roleEffort=null},getRoles:function(){var a=this.entity.roleEfforts,b=[],c=a.length;for(var d=0;d<c;d++)b.push(a[d].role);return b},onRoleEffortsRetrieved:function(a){this.entity=a.data;var b=this.getRoles();this.fire("rolesReady",b)},"bus extendDataToBind":function(a){var b=a.data||{}}})})