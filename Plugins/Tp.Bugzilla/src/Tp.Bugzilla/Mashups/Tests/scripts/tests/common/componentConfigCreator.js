define(["tau/core/class","tau/models/dataprocessor/model.processor.context"],function(a,b){return a.extend({init:function(){this.culture={name:"en-US",timePattern:"g:i A",shortDateFormat:"M/d/yyyy",longDateFormat:"dddd, MMMM dd, yyyy",decimalSeparator:".",__type:"culture"},this.selectedProjectList=[],this.processList=[]},setEntity:function(a){this.entity=a},setLoggedUser:function(a){this.loggedUser=a},setEntityIDAndType:function(a,b){this.entity={id:a,entityType:{name:b}}},setSelectedProjects:function(a){this.selectedProjectList=a},setProcesses:function(a){this.processList=a},setCulture:function(a){this.processList=a},getConfig:function(){var a={context:{entity:this.entity,applicationContext:{selectedProjects:this.selectedProjectList,culture:this.culture,processes:this.processList,loggedUser:this.loggedUser}}};return b(a.context),a}})})