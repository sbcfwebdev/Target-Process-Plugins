define(["tau/core/model.editable.base","libs/underscore"],function(a){var b=a.extend({name:"User Editable","bus dataBind":function(){this.fire("permissionsReady",{editable:!0})}});return b})