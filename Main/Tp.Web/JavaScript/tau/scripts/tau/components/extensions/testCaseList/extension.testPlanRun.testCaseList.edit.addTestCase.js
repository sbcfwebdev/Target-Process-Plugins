define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/utils/utils.urlBuilder","tau/core/termProcessor"],function(a,b,c,d,e){return c.extend({"bus afterRender+permissionsReady+dataBind":function(a){if(a.permissionsReady.data.editable){var c=a.dataBind.data,f=a.afterRender.data.element,g=this.config.context.applicationContext?this.config.context.applicationContext.processes[0].terms:this.config.context.processes[0].terms,h=new e(g),i=b('<a class="tau-add-testCase">Add '+h.getTerms("TestCase").names+"</a>");i.attr("href",d.getAddTestCaseForTestPlanRunUrl(this.config.context.entity.id)),f.find(".tau-add-testCase").replaceWith(i)}}})})