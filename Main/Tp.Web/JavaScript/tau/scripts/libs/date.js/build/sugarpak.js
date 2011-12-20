/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
(function(){var a=Date,b=a.prototype,c=a.CultureInfo,d=Number.prototype;b._orient=1,b._nth=null,b._is=!1,b._same=!1,b._isSecond=!1,d._dateElement="day",b.next=function(){return this._orient=1,this},a.next=function(){return a.today().next()},b.last=b.prev=b.previous=function(){return this._orient=-1,this},a.last=a.prev=a.previous=function(){return a.today().last()},b.is=function(){return this._is=!0,this},b.same=function(){return this._same=!0,this._isSecond=!1,this},b.today=function(){return this.same().day()},b.weekday=function(){return this._is?(this._is=!1,!this.is().sat()&&!this.is().sun()):!1},b.at=function(b){return typeof b=="string"?a.parse(this.toString("d")+" "+b):this.set(b)},d.fromNow=d.after=function(a){var b={};return b[this._dateElement]=this,(a?a.clone():new Date).add(b)},d.ago=d.before=function(a){var b={};return b[this._dateElement]=this*-1,(a?a.clone():new Date).add(b)};var e="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),f="january february march april may june july august september october november december".split(/\s/),g="Millisecond Second Minute Hour Day Week Month Year".split(/\s/),h="Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/),i="final first second third fourth fifth".split(/\s/),j;b.toObject=function(){var a={};for(var b=0;b<g.length;b++)a[g[b].toLowerCase()]=this["get"+h[b]]();return a},a.fromObject=function(a){return a.week=null,Date.today().set(a)};var k=function(b){return function(){if(this._is)return this._is=!1,this.getDay()==b;if(this._nth!==null){this._isSecond&&this.addSeconds(this._orient*-1),this._isSecond=!1;var c=this._nth;this._nth=null;var d=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(b,c);if(this>d)throw new RangeError(a.getDayName(b)+" does not occur "+c+" times in the month of "+a.getMonthName(d.getMonth())+" "+d.getFullYear()+".");return this}return this.moveToDayOfWeek(b,this._orient)}},l=function(b){return function(){var d=a.today(),e=b-d.getDay();return b===0&&c.firstDayOfWeek===1&&d.getDay()!==0&&(e+=7),d.addDays(e)}};for(var m=0;m<e.length;m++)a[e[m].toUpperCase()]=a[e[m].toUpperCase().substring(0,3)]=m,a[e[m]]=a[e[m].substring(0,3)]=l(m),b[e[m]]=b[e[m].substring(0,3)]=k(m);var n=function(a){return function(){return this._is?(this._is=!1,this.getMonth()===a):this.moveToMonth(a,this._orient)}},o=function(b){return function(){return a.today().set({month:b,day:1})}};for(var p=0;p<f.length;p++)a[f[p].toUpperCase()]=a[f[p].toUpperCase().substring(0,3)]=p,a[f[p]]=a[f[p].substring(0,3)]=o(p),b[f[p]]=b[f[p].substring(0,3)]=n(p);var q=function(a){return function(){if(this._isSecond)return this._isSecond=!1,this;if(this._same){this._same=this._is=!1;var b=this.toObject(),c=(arguments[0]||new Date).toObject(),d="",e=a.toLowerCase();for(var f=g.length-1;f>-1;f--){d=g[f].toLowerCase();if(b[d]!=c[d])return!1;if(e==d)break}return!0}return a.substring(a.length-1)!="s"&&(a+="s"),this["add"+a](this._orient)}},r=function(a){return function(){return this._dateElement=a,this}};for(var s=0;s<g.length;s++)j=g[s].toLowerCase(),b[j]=b[j+"s"]=q(g[s]),d[j]=d[j+"s"]=r(j);b._ss=q("Second");var t=function(a){return function(b){return this._same?this._ss(arguments[0]):b||b===0?this.moveToNthOccurrence(b,a):(this._nth=a,a!==2||b!==undefined&&b!==null?this:(this._isSecond=!0,this.addSeconds(this._orient)))}};for(var u=0;u<i.length;u++)b[i[u]]=u===0?t(-1):t(u)})()