define(["Underscore","tau/core/class","tau/core/event","tau/core/tau","tau/store/header","tau/core/comparer","tau/store/types","tau/store/db"],function(_,a,b,c,d,e,f,g){var h=a.extend({init:function(a){if(!a.service)throw"rest service should be defined";this.__listenerObjects={objects:[],holders:[]},this.__subscriptions={},this.types=a.types||f.getDictionary(),this._initDb(),this.service=a.service},_initDb:function(){this.__allTypeLoadMarkers={},this.db=new g({types:this.types})},mergeCommands:function(a){var b={},d=this;return _.each(a,function(a){a=_.defaults(a,{name:"get",config:{},callbacks:{}}),a.callbacks=c.getCallbacks(a.callbacks),d._processFieldsConfig(a,a.name==="get"?null:"_getEmptyArray");var e=[a.type,a.config.id||"_",a.name,a.config.nested===!0?_.uniqueId():""].join("_");if(!b.hasOwnProperty(e))b[e]=a,a.commands=[];else{var f=b[e];d.db.mergeFields(f.config.fields,a.config.fields),f.commands.push(a)}}),b},execute:function(a){var b=this;_.isArray(a)||(a=[a]);var c=b.mergeCommands(a);_.each(_.values(c),function(a){if(a.executed===!0)throw"command is already executed. the same command can not be used twice";b["api "+a.name](a)})},_registerListener:function(a,b,d){var e=a||{},f=b.eventName;e.hasOwnProperty(f)||(e[f]={});var g=_.uniqueId(f),h={id:g,config:b,callback:c.createScopedCallbackIfRequired(d)},i=e[f],j=b.listener;if(j){if(!j.__getRepositorySubscriberId){var k=_.uniqueId("repository_");j.__getRepositorySubscriberId=function(){return k},this.__listenerObjects[k]={listener:j,holders:[]}}var l={id:g,holder:i};this.__listenerObjects[j.__getRepositorySubscriberId()].holders.push(l)}return i[g]=h,h},unbind:function(a){if(!a.__getRepositorySubscriberId)return;var b=this,c=a.__getRepositorySubscriberId(),d=b.__listenerObjects[c];if(!d)return;var e=d.holders;if(!e)return;_(e).each(function(a){var b=a.holder[a.id];b.callback=function(){},delete a.holder[a.id]}),delete a.__getRepositorySubscriberId,delete b.__listenerObjects[c]},_getListeners:function(a){var b=this,c=b._getSubscriptions(a.type);if(!c)return[];var d=c[a.eventName];if(!d)return[];var f=[];return _.each(_(d).values(),function(c){var d=c.config.filter,g=c.config.hasChanges||[];if(d){var h=b.db.getPersistedNode(a.obj.id,a.obj.type),i=a.obj;h&&h.data?i=h.data:a.nodeEvent.changes&&!_.isEmpty(a.nodeEvent.changes)&&(i=a.nodeEvent.changes);var j=e.compare(i,d);if(_(j.changes).keys().length>0)return}if(a.nodeEvent&&g.length>0){var k=a.nodeEvent.changes||{},l=_(g).all(function(a){var b=a.split("|"),c=!1;return b.length>1?c=0<_(k).chain().keys().intersection(b).size().value():c=k.hasOwnProperty(a),c});if(!l)return}f.push(c)}),f},on:function(a,b){var c=this,d=a.type?c.types[a.type].name:"_all_",e=c._getSubscriptions(d);return c._registerListener(e,a,b)},_getSubscriptions:function(a){return this.__subscriptions.hasOwnProperty(a)||(this.__subscriptions[a]={}),this.__subscriptions[a]},_autoAppend:function(a,b,c){_.each(b,function(b){_.any(a,function(a){return d.header.getFieldName(a)===d.header.getFieldName(b)})||a[c?c:"unshift"](b)})},registerData:function(a,b){this.db.register(a,null,b)},_getEmptyArray:function(){return[]},_getDefaultFields:function(a){var b=this.types[a.type];return _.clone(b?b.fields||[]:[])},_processFieldsConfig:function(a,b){var c=this;b=b||"_getDefaultFields";if(!a.config.fields||a.config.fields.length===0)a.config.fields=c[b](a);var d=a.config.fields;c._autoAppend(d,["id"]);for(var e=d.length;e>0;e--){var f=d[e-1];if(_.isSimple(f))continue;var g=_.getFieldName(f),h=a.type?c.types[a.type]:null,i=null,j=[];if(h&&h.refs&&h.refs[g]){var k=h.refs[g];k.list===!0&&(f.list=!0),j=k.fields,i=k.name}var l={type:i,config:{fields:f[g]||j}};f[g]=c._processFieldsConfig(l,b)}var m=d.length;for(e=0;e<m;e++){var n=_.getFieldName(d[e]);for(var o=e+1;o<m;o++)_.getFieldName(d[o])===n&&(_.isSimple(d[e])||_.mergeFields(d[e][n],d[o][n]),d.splice(o,1),m--,o--)}return d},_invokeCommandCallback:function(a,b,c,d){var e=this;e._invokeCommandCallbackR(a,b,c,d);if(c.config.silent===!0)return;if(!e.__subscriptions._all_||_.isEmpty(e.__subscriptions._all_))return;var f=_.values(e.__subscriptions._all_[a]||[]),g={name:a,data:{cmd:c,data:d}};_(f).each(function(a){a.callback(g)})},_invokeCommandCallbackR:function(a,b,c,d){var e=this;c.executed=!0,b[a]({command:c,data:d}),c.hasOwnProperty("commands")&&_.each(c.commands,function(b){b.executed=!0,b.failed=c.failed,e._invokeCommandCallbackR(a,b.callbacks,b,d)})},"api removeFromList":function(a){var b=this,c=a.callbacks;a.config.$set=a.config.$set||{},a.callbacks={success:function(d){var e=_.extend(_.extend({},a.config.$set),d),f=b.db.removeFromList(a.config.id,a.type,a.config.$set);b._invokeCommandCallback("success",c,a,{}),b._notifyAboutNewsAndChanges(f,a)},failure:function(d){a.failed=!0,b._invokeCommandCallback("failure",c,a,d)}},b._populateBeforeSaveEvent(a),b._processFieldsConfig(a,"_getEmptyArray"),b.service.removeFromList(a)},"api remove":function(a){var b=this,c=a.callbacks;a.callbacks={success:function(d){var e=b.evictPersistedObject(a.config.id,a.type);b._populateAfterRemoveEvent(a,e),b._invokeCommandCallback("success",c,a,a.callbacks)},failure:function(d){a.failed=!0,b._invokeCommandCallback("failure",c,a,d)}},b._populateBeforeRemoveEvent(a),b.service.remove(a)},evictPersistedObject:function(a,b){return this.db.remove(a,this.types[b].name)},evictProperties:function(a,b,c){this.db.removeProperties(a,this.types[b].name,c)},evictData:function(){this._initDb()},isPropertyInitialized:function(a,b,c){return this.db.isPropertyInitialized(a,b,c)},"api save":function(a){var b=this,c=a.callbacks;a.config.$set=a.config.$set||{},a.callbacks={success:function(d){_.extend(d,{__type:a.type});var e=_.extend(_.extend({},a.config.$set),d),f=b.db.register(e);b._notifyAboutNewsAndChanges(f,a),b._invokeCommandCallback("success",c,a,e)},failure:function(d){a.failed=!0,b._invokeCommandCallback("failure",c,a,d)}},b._populateBeforeSaveEvent(a),b._processFieldsConfig(a,"_getEmptyArray"),b.service.save(a)},_notifyAboutNewsAndChanges:function(a,b){var c=this;_.each(_.keys(a.tree),function(d){_.each(_(a.tree[d]).values(),function(a){c._populateEvent(b,"afterSave",a,{id:a.id,type:d})})})},_populateEvent:function(a,b,c,d){var e=_.uniqueId("repositoryEvent"),f=this._getListeners({type:d.type,eventName:b,nodeEvent:c,obj:d});if(f.length!==0){var g={id:e,name:b,data:{id:d.id,type:d.type,cmd:a,obj:d,changes:c.changes}};_(f).each(function(a){a.callback(g)})}},_populateBeforeRemoveEvent:function(a){this._populateEvent(a,"beforeRemove",{},{id:a.config.id,type:a.type})},_populateAfterRemoveEvent:function(a,b){var c=this;_.each(b.deletedData,function(b){c._populateEvent(a,"afterRemove",{},b)}),c._notifyAboutNewsAndChanges(b,a)},_populateBeforeSaveEvent:function(a){this._populateEvent(a,"beforeSave",{changes:a.config.$set||{}},{id:a.config.id,type:a.type})},markRecordSetAsCompleteLoaded:function(a){this.__allTypeLoadMarkers[a]=!0},isTypeMarkedAsCompleteLoaded:function(a){return this.__allTypeLoadMarkers[a]===!0},_appendDiscriminator:function(a,b){var c=this;a.isParentType&&_.indexOf(b,"id")>=0&&c._autoAppend(b,[a.discriminator],"push"),_.each(b,function(b){if(d.header.isSimple(b))return;var e=d.header.getFieldName(b),f=a.refs[e];f&&c._appendDiscriminator(c.types[f.name],b[e])})},_processCommandForGet:function(a){var b=this,c=b.db.get(a.config.id,a.type,a.config),d=a.config.fields;if(c.notInitializedFields.length===0)if(!c.all||!!b.isTypeMarkedAsCompleteLoaded(a.type))return a.config.fields=d,b._invokeCommandCallback("success",a.callbacks,a,c.data),{isInvoked:!0};var e=c.notInitializedFields;return c.all&&!b.isTypeMarkedAsCompleteLoaded(a.type)&&(e=_.clone(d)),{isInvoked:!1,fields:e}},_runReadCommand:function(a,b,c,d){var e=this;e._appendDiscriminator(e.types[a.type],c),_.extend(a.config,{fields:c}),e._processFieldsConfig(a);var f=a.callbacks;a.callbacks={success:function(c){a.config.fields=b,_.defaults(c,{__type:a.type});var g=e.db.register(c),h=d(c,g);e._invokeCommandCallback("success",f,a,h),a.callbacks=f},failure:function(c){a.config.fields=b,a.failed=!0,e._invokeCommandCallback("failure",f,a,c),a.callbacks=f}},this.service[a.name](a)},"api refresh":function(a){var b=this,c=a.config.fields,d=function(d,e){return b._notifyAboutNewsAndChanges(e,a),b.db.get(a.config.id,a.type,{fields:c}).data};this._runReadCommand(a,c,_.clone(c),d)},"api turboGet":function(a){var b=this,c=a.config.fields||[];b._autoAppend(c,["id"]);var d=a.callbacks;a.callbacks={success:function(c){_.defaults(c,{__type:a.type}),b._invokeCommandCallback("success",d,a,c),a.callbacks=d},failure:function(c){a.failed=!0,b._invokeCommandCallback("failure",d,a,c),a.callbacks=d}},this.service[a.name](a)},"api find":function(a){var b=this,c=a.config.fields,d=function(d){var e=[];_.each(d,function(d){e.push(b.db.get(d.id,a.type,{fields:c}).data)});if(d.hasOwnProperty("getNextPage")){e.isNextPageAvailable=function(){return!0};var f=_.clone(a);f.config=_.clone(f.config),f.config.$skip=f.config.$skip+f.config.$limit,e.getNextPageCommand=function(){return f}}else e.isNextPageAvailable=function(){return!1};return e};this._runReadCommand(a,c,_.clone(c),d)},"api get":function(a){var b=this,c=a.config.fields,d=b._processCommandForGet(a);if(d.isInvoked)return;var e=function(d){return a.config.id||b.markRecordSetAsCompleteLoaded(a.type),b.db.get(a.config.id,a.type,{fields:c}).data};this._runReadCommand(a,c,d.fields,e)}});return h})