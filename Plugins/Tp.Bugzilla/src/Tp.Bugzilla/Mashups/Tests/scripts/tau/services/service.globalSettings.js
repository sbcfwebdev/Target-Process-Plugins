define(["tau/core/class"],function(a){var b=null,c=a.extend({init:function(a){this.config=a},resetSettings:function(){b=null},getGlobalSettings:function(a){var c=function(a,b){a.success&&a.success.call(a.scope,b.d)};if(b){c(a,b);return}this.sendRequest("GlobalSettingsService","GetGlobalSettings",null,function(d){b=d,c(a,d)},function(b){a.failure&&a.failure.call(a.scope,b)})},sendRequest:function(a,b,c,d,e){var f=this.config.appPath+"/PageServices/"+a+".asmx/"+b,g={contentType:"application/json",type:"POST",success:d,error:e};c&&(g.data=JSON.stringify(c)),$.ajax(f,g)}});return c})