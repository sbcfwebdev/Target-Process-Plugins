define(["Underscore","tau/configurator","tau/core/model-base","tau/configurations/factory.container.config"],function(a,b,c,d){return c.extend({name:"model.entity.actions",onInit:function(){var a=this,b=a.config.context.id;a.fire("permissionsReady",{editable:!0});var c=d.getContextBasedConfigObject(a.config),e=c.getActions();a.fire("dataBind",{items:e})}})})