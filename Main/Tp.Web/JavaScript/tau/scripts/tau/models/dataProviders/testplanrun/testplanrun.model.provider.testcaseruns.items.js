define(["Underscore","tau/models/dataProviders/model.provider.items.base","tau/configurator"],function(a,b,c){return b.extend({fetch:function(a){this._fetch("testCaseRuns","testCaseRun",null,a)},_createDetailCommand:function(a){var b={};return b[a]=["id","passed",{testCases:["id","name","tags","numericPriority",{priority:["id","name","importance"]}]}],b},_convertData:function(b){return b=this._super(b),a.sortBy(b,function(a){var b=a.testcase.numericPriority||0;return b})},_convertItem:function(a){var b=this,d=c.getApplicationPath(),e=a.testCases[0],f={id:a.id,__type:a.__type,name:e.name,testcase:{id:e.id,__type:e.__type,name:e.name,tags:this._processTags(e),priority:e.priority,numericPriority:e.numericPriority},passed:a.passed,status:a.passed===!0?"Passed":a.passed===!1?"Failed":"Skipped"};return f}})})