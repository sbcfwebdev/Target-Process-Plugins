define(["jQuery","tp/reports/plot","tp/reports/context","libs/jquery/jquery.tmpl"],function($,a,b){function c(a){this._ctor(a)}return c.prototype={template:'<div class="burnDownReport _burnDownReport">\n    <span class="tableTitle">${name}</span>\n    <div>\n        <div id="report-filter">\n        </div>\n    </div>\n    <div id="report-chart">    \n    </div>\n</div>',_ctor:function(c){this.filter=c.filter,this.name=c.name,this.placeholder=$(c.placeholder),this.dataProvider=c.dataProvider,this.plot=new a({charts:c.charts}),this.context=b},render:function(){this.context.get($.proxy(function(){this.placeholder.html($.tmpl(this.template,{name:this.name})),this.plot.placeholder=this.placeholder.find("#report-chart"),this.filter.initialize({placeholder:this.placeholder.find("#report-filter"),update:$.proxy(this._renderChart,this)})},this))},_renderChart:function(){var a=!0;setTimeout($.proxy(function(){a&&this._showLoader()},this),500),this.dataProvider.initialize(this.filter.getData(),$.proxy(function(){a=!1,this.placeholder.find("#report-chart").removeClass("loader"),this.plot.render(this.dataProvider)},this))},_showLoader:function(){this.placeholder.find("#report-chart").addClass("loader")}},c})