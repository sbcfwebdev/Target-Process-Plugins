define(["tau/models/model.list.baseInfo","tau/models/baseInfoList/extension.model.additionalInfoImpedimentFilter"],function(a,b){var c=a.extend({init:function(a){a.propertyName="impediments",a.typeName="impediment",this._super.apply(this,arguments),new b(a)},"bus entitiesRetrieved":function(a){this.fire("impedimentsCountRetrieved",{count:a.data.length})},onGetEntity:function(a){var b=a.data,c=b["impediments-count"];this.fire("impedimentsCountRetrieved",{count:c})}});return c})