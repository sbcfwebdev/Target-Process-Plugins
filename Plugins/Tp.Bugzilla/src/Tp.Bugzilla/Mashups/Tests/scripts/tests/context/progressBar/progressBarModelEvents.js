define(["tau/core/tau"],function(a){function b(a){this.testContext=a,this.initializedArgsActual=[],this.initializedArgsExpected=[],this.initializedRetVal={expected:this.initializedArgsExpected,addExpectedData:function(a){this.expected.push(a)}},this.verifyFunctions=[]}return b.prototype={afterInit:function(){return this.listenAfterInit(),this.initializedRetVal},listenAfterInit:function(){this.listenAfterInit=a.empty,this.testContext.model.on("afterInit",this._onInitialized,this),this.verifyFunctions.push(this._verifyInitialized)},_onInitialized:function(){this.initializedArgsActual.push(arguments[0].data)},_verifyInitialized:function(){var a=this.initializedArgsExpected,b=this.initializedArgsActual;equal(a.length,b.length,"Fired initialized events count is valid");for(var c=0;c<Math.min(a.length,b.length);c++){var d=b[c],e=a[c];this.validateInitData(d,e,"Init data is valid")}},validateInitData:function(a,b,c){equal(a.id,b.id,"id "+c),equal(a.name,b.name,"name "+c),equal(a.entityState.id,b.entityState.id,"entityState.id "+c),equal(a.entityState.name,b.entityState.name,"entityState.name "+c),equal(a.effortCompleted,b.effortCompleted,"effortCompleted "+c),equal(a.effortToDo,b.effortToDo,"effortToDo "+c),equal(a.timeSpent,b.timeSpent,"timeSpent "+c),equal(a.timeRemain,b.timeRemain,"timeRemain "+c),equal(a.entityType.name,b.entityType.name,"entityType.name "+c)},verify:function(){var a=this.verifyFunctions;for(var b=a.length;b--;)a[b].call(this)}},b})