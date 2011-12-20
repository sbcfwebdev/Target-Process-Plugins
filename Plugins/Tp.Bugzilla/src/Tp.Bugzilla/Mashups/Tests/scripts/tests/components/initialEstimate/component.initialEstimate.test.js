define(["jQuery","tau/configurator","tests/common/testCase","tests/common/componentConfigCreator","tau/components/component.property.initialEstimate","tests/common/testData.Generator"],function(a,b,c,d,e,f){var g=function(){var b=new f;b.initDefaultData();var g=b.getData(),h=b.getFeatures()[0],i=new d;i.setEntityIDAndType(h.id,h.__type),i.setSelectedProjects([g.selectByType("project")[0]]);var j=g.selectByType("process");i.setProcesses(j);var k=i.getConfig(),l=new c("[component.initialEstimate]");l.initModule({componentConfig:k,data:g},e),l.test("should render valid markup",function(){var b=this.element;equal(a.trim(b.find(".property-text").text()),"5.61h","Initial date is valid"),equal(b.find(".property-text .point").text(),"h","Point is valid")}),l.test("should change initial estimate",function(){this.serviceMock.registerSaveCommand({config:{$set:{initialEstimate:99},fields:["id"],id:h.id},returnedData:{id:h.id,effortToDo:99}});var a=this.element,b=a.find(".property-text").eq(0);b.click(),b.text(99),b.blur(),equal(this.element.find(".property-text").eq(0).text(),"99h")})};return{run:g}})