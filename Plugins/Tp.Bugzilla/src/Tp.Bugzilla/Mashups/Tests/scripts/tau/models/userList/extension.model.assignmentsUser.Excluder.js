define(["Underscore","tau/core/model-base"],function(a,b){return b.extend({"bus registerStoreRequest":function(){var a=this.config.context.entity||{entityType:{}},b={role:["id","name"]},c={generalUser:["id","firstName","lastName"]};this.fire("get",{type:a.entityType.name,query:{id:a.id,fields:[{assignments:["id",b,c],list:!0}]},callback:{scope:this,success:this.onEntityRetrieved}})},onEntityRetrieved:function(a){var b=this.config.data||{},c=a.data,d=[],e=b.roleId||(b.role||{}).id;if(e){var f=c.assignments||[];for(var g=0;g<f.length;g++)f[g].role.id==e&&d.push(f[g].generalUser)}this.fire("excludedUserReady",d)}})})