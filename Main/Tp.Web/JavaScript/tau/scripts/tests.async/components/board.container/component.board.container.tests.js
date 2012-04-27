define(["jQuery","tau/components/component.board.container","tau/configurator","tau/service.container","tau/utils/utils.fixturesLoader.store","tests/common/remoteConstants","libs.tests/Sinon","tau/core/bus","tau/utils/utils.process","tau/models/boardSettings/factory.board.settings"],function($,a,b,c,d,e,f,g,h,i){var j={name:"component.board.container"},k=b.getConfig("real",!1),l,m="testBoardSettings"+ +(new Date);return j.setUp=function(a){l=new c,l.setRestStorageService(function(a){var b=a.$scope;if(b.$group==="boards"){var c=b.$value&&b.$value.userData?b.$value.userData.zoomLevel:"1",d={group:{name:"boards",id:2},key:b.$key,ownerId:1,scope:"Public",publicData:{},userData:{zoomLevel:c},id:1},e=$.Deferred();return e.resolve(d),e}}),a()},j.tearDown=function(a){var b=l.getExternal();b.setHashParam(m,null),l.setRestStorageService(null),a()},j["render and increase zoom"]=function(b){var c=a.create({}),d=new g,e=-1,f=-1,j=null,k=[];d.checkCase=function(a,b){k.push({eventName:a,data:b.data}),d.runCases()},d.runCases=function(){k.length&&h.nextTick(function(){var a=k.splice(0,1)[0];d.fire(a.eventName,a.data)})},c.on("afterRender",function(a){h.nextTick(function(){d.fire("afterRender["+ ++e+"]",a.data)})}),c.on("componentCreated",function(a){j=a.data.component}),d.on("afterRender[0]",function(a){var c=a.data.element,e=c.find(".tau-zoom-level"),f=c.find(".tau-zoom-level").size();b.equals(f,2,"Zoom level component is added");for(var g=0;g<f;g++)b.equals(e.eq(g).slider("value"),1,"Default zoom level value");var h=l.getExternal();b.equals(h.getHashParam(m).zoomLevel,null,"ZoomLevel value before change"),d.checkCase("increment",{data:{element:c}})}),d.on("increment",function(a){var c=l.getExternal(),e=a.data.element;j.on("zoomLevelUpdated",function(a){a.removeListener(),b.equals(c.getHashParam(m).zoomLevel,2,"ZoomLevel value after increment");var f=e.find(".tau-zoom-level").eq(1);b.equals(f.slider("value"),2,"Second zoom level component is updated to 2"),d.checkCase("decrement",{data:{element:e}})});var f=e.find(".tau-zoom-level").eq(0);f.slider({value:f.slider("value")+1})}),d.on("decrement",function(a){var c=l.getExternal(),d=a.data.element;j.on("zoomLevelUpdated",function(a){a.removeListener(),b.equals(c.getHashParam(m).zoomLevel,1,"ZoomLevel value after decrement");var e=d.find(".tau-zoom-level").eq(0);b.equals(e.slider("value"),1,"First zoom level component is updated to 1"),b.done()});var e=d.find(".tau-zoom-level").eq(1);e.slider({value:e.slider("value")-1})});var n={entity:{},configurator:l};c.initialize({context:n,children:[{type:"board.zoomLevel",bindData:!0},{type:"board.zoomLevel",bindData:!0}]});var o={id:m,zoomLevel:1},p=i.createInstance(l,o);c.fire("boardSettings.ready",{boardSettings:p})},j})