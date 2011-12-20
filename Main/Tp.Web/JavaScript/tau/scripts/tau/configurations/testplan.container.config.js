define(["tau/configurations/baseContainable.container.config","tau/models/model.extensions","tau/utils/utils.urlBuilder","tau/components/extensions/testCaseList/extension.testPlanRun.testCaseList.edit.addTestCase","tau/components/extensions/testCaseList/extensions.testCaseList.labelRefresher"],function(a,b,c,d,e){var f=a.extend({init:function(b){a.prototype.init.call(this,b);var d=b.context.entity;this.registerAction("Add Test Plan Run",{label:"Add "+this.getTermName("TestPlanRun"),url:c.getAddTestRunForTestPlanUrl(d.id),practices:["Test Cases"]}),this.registerAction("Assign Test Cases",{label:"Assign "+this.getTermName("TestCase"),url:c.getAssignTestCasesForTestPlanUrl(d.id),practices:["Test Cases"]})},getTabs:function(c){var f=a.prototype.getTabs.call(this,c),g=this;return f.push({label:"testcases",header:[{type:"label",text:g.getNames("testCase"),getBadgeText:b.calculateTesCasesCount,badgeFieldName:"count",extensions:[e]}],items:[{type:"testCaseList",addTestCaseExtension:d,practices:["Test Cases"]}],practices:["Test Cases"]}),f.push(g.getAuditHistoryTab()),f},getAdditionalInfoAliases:function(){return["Initial Estimate","Owner","CreationDate"]},getActionsAliases:function(){return["Add Test Plan Run","Assign Test Cases","-----","Old View","Old Edit","Print","-----","Delete"]}});return f})