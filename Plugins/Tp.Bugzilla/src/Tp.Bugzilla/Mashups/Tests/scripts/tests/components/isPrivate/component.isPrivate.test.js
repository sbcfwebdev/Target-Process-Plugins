define(["Underscore","jQuery","tau/configurator","tests/common/testCase","tests/common/componentConfigCreator","tau/components/component.property.isPrivate","tests/common/testData.Generator"],function(a,b,c,d,e,f,g){var h=function(){var b=new g;b.initDefaultData();var c=b.getData(),h=b.getImpediments()[1],i=b.getImpediments()[0],j=new e;j.setEntityIDAndType(h.id,h.__type),j.setSelectedProjects([c.selectByType("project")[0]]),j.setProcesses(c.selectByType("process"));var k=j.getConfig();j=new e,j.setEntityIDAndType(i.id,i.__type),j.setSelectedProjects([c.selectByType("project")[0]]),j.setProcesses(c.selectByType("process"));var l=j.getConfig(),m=new d("[component.isPrivate]");m.initModule({componentConfig:l,data:c},f),m.test("should render valid markup for not private impediment",function(){var a=this.element;ok(a.find(".ui-checkbox").hasClass("unchecked"),"Is not Private")});var m=new d("[component.isPrivate]");m.initModule({componentConfig:k,data:c},f),m.test("should render valid markup",function(){var a=this.element;ok(a.find(".ui-checkbox").hasClass("checked"),"Is Private")});var n=a.clone(k),m=new d("[component.isPrivate]");m.initModule({componentConfig:n,data:c},f),m.test("should uncheck on click",function(){var a=this.element;ok(a.find(".ui-checkbox").hasClass("checked"),"Is Private"),this.serviceMock.registerSaveCommand({config:{$set:{isPrivate:!1},fields:["id"],id:h.id},returnedData:{id:h.id,isPrivate:!1}}),a.find(".ui-checkbox").click(),a=this.element,ok(!a.find(".ui-checkbox").hasClass("checked"),"Is not checked"),ok(a.find(".ui-checkbox").hasClass("unchecked"),"Is unchecked")}),m.test("should uncheck on edit",function(){var a=this.element;ok(a.find(".ui-checkbox").hasClass("checked"),"Is Private"),this.serviceMock.registerSaveCommand({config:{$set:{isPrivate:!1},fields:["id"],id:h.id},returnedData:{id:h.id,isPrivate:!1}}),this.component.fire("edit"),a=this.element,ok(!a.find(".ui-checkbox").hasClass("checked"),"Is not checked"),ok(a.find(".ui-checkbox").hasClass("unchecked"),"Is unchecked")})};return{run:h}})