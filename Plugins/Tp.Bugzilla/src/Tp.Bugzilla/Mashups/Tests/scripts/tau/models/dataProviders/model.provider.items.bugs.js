define(["Underscore","tau/models/dataProviders/model.provider.items.base"],function(a,b){return b.extend({fetch:function(a){this._fetch("bugs","bug","severity",a)},_createDetailCommand:function(b){var c={};c[b]=["id","name","numericPriority","tags","effort","effortCompleted","effortToDo","timeSpent","timeRemain",{entityState:["id","name","isInitial","isFinal","numericPriority","isCommentRequired",{nextStates:["id"]}]},{roleEfforts:["id","effort","effortToDo",{role:["id","name","isPair","hasEffort"]}]},{owner:["id","firstName","lastName"]},{assignments:["id",{role:["id"]},{generalUser:["id","firstName","lastName"]}]},{severity:["id","name","importance"]}];var d={project:["id"]};return this.config.multiprojects&&d.project.push("abbreviation"),c[b].push(d),this.config.additionalFields&&a.indexOf(this.config.additionalFields,"iteration")>-1&&c[b].push({iteration:["id","name"]}),c},_convertItem:function(b){var c=this,d={id:b.id,name:b.name,numericPriority:b.numericPriority,__type:b.__type,entityState:{id:b.entityState.id,name:b.entityState.name,isInitial:b.entityState.isInitial,isFinal:b.entityState.isFinal,numericPriority:b.entityState.numericPriority},tags:this._processTags(b),effort:this._getEffortData(b),assignments:this._processAssignments(b),severity:{id:b.severity.id,name:b.severity.name,kind:c.importanceProcessor.getKind(b.severity.importance)},projectId:b.project.id,entitiesCount:0};return this.config.multiprojects&&(d.project={id:b.project.id,abbreviation:b.project.abbreviation}),this.config.additionalFields&&a.indexOf(this.config.additionalFields,"iteration")>-1&&(d.iteration={id:b.iteration?b.iteration.id:null,name:b.iteration?b.iteration.name:null}),d}})})