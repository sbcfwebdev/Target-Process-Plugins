function testWidgetDefaults(a,b){var c=$.extend({},$.ui[a].prototype.options);test("defined defaults",function(){$.each(b,function(a,b){if($.isFunction(b)){ok(b!==undefined,a);return}same(c[a],b,a)})}),test("tested defaults",function(){$.each(c,function(a,c){ok(a in b,a)})})}function testWidgetOverrides(a){test("$.widget overrides",function(){$.each(["_widgetInit","option","_trigger"],function(b,c){ok($.Widget.prototype[c]==$.ui[a].prototype[c],"should not override "+c)})})}function commonWidgetTests(a,b){module(a+": common widget"),testWidgetDefaults(a,b.defaults),testWidgetOverrides(a)}