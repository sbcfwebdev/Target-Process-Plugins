define(function(require,exports,module){var a=require("./utils"),b=require("./objecttools"),c=a.locale,d=Array.prototype.slice;module.exports=function(){var e=this,f=this.detectRecursion,g=this.Validation=function(b,d,h){h=h||{},this._flags={},this._errors={},this._wasError=0,this._stack=[],this.path=[],this.id=g._id++,this.schema,this.push(b),this.instance=d,this.locale=e.locale||"en",this.detectRecursion=h.detectRecursion||f,this.errors=[];var i=this,j=this.Error=function(b,d,e){this.schema=i.schema,this.path=i.path?[].concat(i.path):[],this.attribute=b||"",this.description=typeof d=="object"?c(d,i.locale)(this):d||"",e&&a.extend(this,e),i._errors[this.id()]||(i._errors[this.id()]=!0,i.errors.push(this)),i._wasError++};j.prototype.toJSON=function(){return{path:this.path,name:this.attribute,description:this.description}},j.prototype.id=function(){return[this.path,undefined,this.attribute]+""},this.instance=this.start(d),delete this._flags,this._errors,this._wasError,this._stack,this.path,this.id};a.extend(g.prototype,{isError:function(){return this.errors.length>0},getError:function(){if(this.errors.length===0)return null;var a=new Error(c(e.i18n("validation_error"),this.locale)(this));return a.errors=this.errors,a.toJSON=function(){return{message:this.message,errors:this.errors}},a},wasError:function(){var a=this._wasError;return this._wasError=0,a},push:function(a,b){this.schema=a,this._stack.push(a),b!==undefined&&this.path.push(b)},pop:function(a){var b=[this._stack.pop(),a?undefined:this.path.pop()],c=this._stack.length;return this.schema=c?this._stack[c-1]:null,b},getFlag:function(a){return b.id(a)+"_"+this.schema.id},flagObject:function(a){return this._flags[this.getFlag(a)]=!0,a},isObjectFlagged:function(a){return this.getFlag(a)in this._flags},callPlugin:function(a,b){var c=arguments.length>2?d.call(arguments,1):[b];return typeof a!="function"&&(a=g.plugins[a]||g.plugins.addError),a.apply(this,c)}}),a.extend(g,{_id:1,registerPlugins:function(b){a.extend(g.plugins,b)},plugins:{addError:function(a,b){return new this.Error(b,e.i18n["validation_error_"+b]),a}}}),require("./"+this.v+"/validation").call(this)}})