define(["Underscore","tau/core/model-base"],function(a,b){return b.extend({"bus registerStoreRequest":function(){var a=this.config.context.entity||{entityType:{}};this.fire("get",{type:a.entityType.name,query:{id:a.id,fields:[{project:["id"]}]},callback:{scope:this,success:this.onEntityRetrieved}})},onEntityRetrieved:function(a){var b=a.data.project?a.data.project.id:a.data.id,c={user:["id","firstName","lastName","isActive"]},d={role:["id","name"]},e={projectMembers:[c,d]};this.fire("get",{type:"project",query:{id:b,fields:["id",e]},callback:{scope:this,success:this.onProjectRetrieved}}),this.fire("commitTransaction")},onProjectRetrieved:function(a){var b=a.data.projectMembers;this.fire("projectMembersReady",b);var c=this.getRoles(b);this.fire("projectRolesReady",c)},getRoles:function(b){var c={},d=[];return a.each(b,function(a){var b=a.role;c.hasOwnProperty(b.id)||(c[b.id]=!0,d.push(b))}),d}})})