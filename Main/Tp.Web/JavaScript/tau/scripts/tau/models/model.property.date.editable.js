define(["tau/core/model.editable.base"],function(a){return a.extend({"bus dataBind":function(){this.bus.fire("permissionsReady",{editable:this.config.editable})}})})