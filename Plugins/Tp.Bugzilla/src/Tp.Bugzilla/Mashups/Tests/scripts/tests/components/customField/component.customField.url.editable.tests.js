define(["tests/components/customField/component.customField.specification.base","tau/components/component.customField.url"],function(a,b){var c=function(){a.run("url.editable",b,{name:"CF URL",type:"url",required:!1,listed:!0},{label:"CF link",url:"http://targetprocess.com/"},[{name:"Should allow to save",test:function(){var a=this.data,b=this.$el.find(".custom-field");ok(this.$el.hasClass("ui-customfield_editable_true"),"Editable highlighting is applied");var c=b.find(".url");c.click();var d=b.next(".tau-bubble ")}}])};return{run:c}})