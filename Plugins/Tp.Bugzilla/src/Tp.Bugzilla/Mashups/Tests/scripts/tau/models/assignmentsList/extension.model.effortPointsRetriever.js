define(["Underscore","tau/models/extension.model.base"],function(a,b){return b.extend({category:"model effort points extension",_getEffortPoints:function(){return this.config.context.getEffortPoint().shortName},"bus extendDataToBind":function(a){var b=a.data||{};b.effortPoints=this._getEffortPoints()}})})