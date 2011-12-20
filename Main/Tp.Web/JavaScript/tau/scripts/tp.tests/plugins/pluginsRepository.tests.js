require(["tp/plugins/pluginsRepository"],function(a){(function(){module("plugins repository tests",{setup:function(){this.plugins=[{category:"New Plugins",plugins:[{name:"Bugzilla",description:"Synchronizes Bugzilla and TargetProcess",newProfileUrl:"/targetprocess/Admin/EditProfileExt.aspx?acid=CBDA7D6711B8B8AD2B61B1B6BB3C4017&PluginName=Bugzilla&Placeholders=profileeditorbugzilla&BackUrl=%2ftargetprocess%2fAdmin%2fPlugins.aspx",profiles:[{name:"bz",pluginName:"Bugzilla",editUrl:"/targetprocess/Admin/EditProfileExt.aspx?acid=CBDA7D6711B8B8AD2B61B1B6BB3C4017&PluginName=Bugzilla&ProfileName=bz&Placeholders=profileeditorbugzilla&BackUrl=%2ftargetprocess%2fAdmin%2fPlugins.aspx"}]}]}],this.pluginsRepository=a;var b=this;this.pluginsRepository.gateway={postJSON:function(a,c,d){d(b.plugins)}}},teardown:function(){}}),test("should find started plugin with at least one profile",function(){expect(1);var a=!1;this.pluginsRepository.pluginStartedAndHasAtLeastOneProfile("Bugzilla",function(b){a=!0}),ok(a,"Plugin started and has at least one profile")}),test("should not do anything if plugin is not started or doesn't have any profiles",function(){expect(1);var a=!1;this.pluginsRepository.pluginStartedAndHasAtLeastOneProfile("Noname",function(b){a=!0}),ok(a==0,"Plugin is not started or doesn't have any profiles")})})()})