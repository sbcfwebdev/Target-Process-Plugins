define(["tau/components/component.list.creator","tau/models/model.testCaseList","tau/models/model.testCaseList.editable","tau/components/extensions/testCaseList/extension.testCaseList.edit.addTestCase","tau/components/extensions/testCaseList/extension.testCaseList.edit.runner","tau/components/extensions/testCaseList/extension.testCaseList.refresher","tau/ui/templates/testCaseList/ui.template.testCaseList","tau/ui/extensions/testCaseList/ui.extension.testCaseList"],function(a,b,c,d,e,f,g,h){return{create:function(i){var j={template:g,extensions:[b,c,h,i.addTestCaseExtension||d,e,f],message:"No test cases found"};return a.create(j,i)}}})