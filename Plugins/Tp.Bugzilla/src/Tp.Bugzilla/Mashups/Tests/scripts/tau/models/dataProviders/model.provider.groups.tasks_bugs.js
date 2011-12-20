define(["Underscore","tau/models/dataProviders/model.provider.groups.base"],function(a,b){return b.extend({fetch:function(b,c,d){var e=a.pluck(this.config.context.applicationContext.processes[0].practices,"name"),f={tasks:[],bugs:[]},g=[],h=[],i=a(c).select(function(a){return a.__type==="task"}),j=a(c).select(function(a){return a.__type==="bug"});f.tasks=a(i).chain().pluck("projectId").uniq().value(),a.indexOf(e,"Bug Tracking")!==-1&&(f.bugs=a(j).chain().pluck("projectId").uniq().value());var k=this.config.store,l=this;k.get("projects",{fields:[{process:["id"]}],list:!0}).done({success:function(c){var e=c[0].data,g={tasks:[],bugs:[]};a.forEach(f,function(b,c){g[c]=a(e).chain().select(function(c){return a(b).include(c.id)}).map(function(a){return a.process.id}).uniq().value()});var h=function(b){var c=(b.entityType.name||"").toLowerCase(),d=b.process.id;return c==="task"&&a(g.tasks).include(d)||c==="bug"&&a(g.bugs).include(d)};return l._fetchState(b,h,d)}})},moveToGroup:function(a,b,c,d){return this._moveToGroupByState(a,b,c,d)},isAvailableForItem:function(b,c,d){var e=a.find(d.realGroups,function(a){return a.id==b.entityState.id}),f=a.find(c.realGroups,function(a){return a.entityType.name.toLowerCase()==b.__type.toLowerCase()&&a.process.id==e.process.id}),g=a.pluck(e.nextStates,"id");return g.push(e.id),f&&a.include(g,f.id)},getCommentRequirements:function(b,c,d){var e=a.find(d.realGroups,function(a){return a.id==b.entityState.id}),f=[];return a.forEach(c,function(c){var d=a.find(c.realGroups,function(a){return a.entityType.name.toLowerCase()==b.__type.toLowerCase()&&a.process.id==e.process.id});f.push({isCommentRequired:d?d.isCommentRequired:!1})}),f}})})