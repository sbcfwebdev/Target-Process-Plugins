define(["Underscore","jQuery","tests/components/customField/component.customField.specification.base","tau/components/component.customField.richtext"],function(a,b,c,d){var e=function(){function a(){var a=this.$el,b=a.find(".value:first");b.dblclick()}var b=[{name:"should allow to edit",preSetup:c.shouldSave("CF Rich","edited"),test:function(){var b=this.$el,c=this.data,d=this.$el.find(".value:first"),e=d.html();a.call(this),equals(b.find("textarea").length,1,"Generate editor textarea"),equals(b.find("textarea").val(),e,"Set value to editor");var f="edited";b.find("textarea").val(f),b.find("button:first").click(),equals(d.html(),f,"Save value from editor")}},{name:"Should correct save empty",preSetup:c.shouldSave("CF Rich",""),test:function(){var b=this.$el,c=this.data,d=this.$el.find(".value:first"),e=d.html();a.call(this),b.find("textarea").val(""),b.find("button:first").click()}}];c.run("richtext.editable",d,{name:"CF Rich",type:"richtext",required:!1,listed:!0},"Rich text",b)};return{run:e}})