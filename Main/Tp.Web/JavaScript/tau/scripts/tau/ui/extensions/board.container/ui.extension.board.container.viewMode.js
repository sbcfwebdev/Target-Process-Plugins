define(["jQuery","tau/core/extension.base"],function($,ExtensionBase){return ExtensionBase.extend({"bus afterInit+boardSettings.ready":function(evt,initConfig,bs){var boardSettings=bs.boardSettings,self=this;boardSettings.unbind({listener:this}),boardSettings.bind({fields:["viewMode"],listener:this,callback:function(result){self.fire("refresh")}})}})})