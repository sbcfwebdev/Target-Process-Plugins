define(["tau/components/component.list.baseInfo","tau/components/extensions/requestsList/extension.requestList.refresher"],function(a,b){return{create:function(c){var d={extensions:[b]};return c.typeName="request",c.propertyName="requests",a.create(c,d)}}})