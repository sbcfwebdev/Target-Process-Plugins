define(["jQuery","tau/configurator","tests/common/testCase","tests/common/componentConfigCreator","tau/components/component.property.buildDate","tests/common/testData.Generator"],function(a,b,c,d,e,f){var g=function(){var a=new f;a.initDefaultData();var b=a.getData(),g=a.getProjects(),h=a.getBuilds()[0],i=new d;i.setEntityIDAndType(h.id,h.__type),i.setSelectedProjects([b.selectByType("project")[0]]),i.setProcesses(b.selectByType("process"));var j=i.getConfig(),k=new c("[component.property.buildDate]");j.editable=!0,k.initModule({componentConfig:j,data:b},e),k.test("should render valid markup",function(){var a=this.element}),k.test("should should change completionDate",function(){})};return{run:g}})