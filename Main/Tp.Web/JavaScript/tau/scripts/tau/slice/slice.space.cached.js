define(["Underscore","tau/slice/api","./url.resolver"],function(_,Slice,resolver){var _spaceCache={};return Slice.extend({space:function(){var cmd={method:"space"},options=this.getCallOptions({}),urlConfig=resolver.resolve(this.config.definition,cmd,options),url=urlConfig.url;return _spaceCache.hasOwnProperty(url)||(_spaceCache[url]=this.resolveDeferred("space",{})),_spaceCache[url]}})})