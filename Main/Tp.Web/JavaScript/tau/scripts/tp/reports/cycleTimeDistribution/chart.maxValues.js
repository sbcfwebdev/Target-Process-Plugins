define(["jQuery","Underscore","libs/d3/d3"],function($,_,d3){function MaxValuesChart(config){this.contextProvider=config.contextProvider}return MaxValuesChart.prototype={data:function(histograms,context){var maxValData=histograms.map(function(d){var maxLength=d3.max(d.values,function(d){return d.length}),maxBin=d.values.filter(function(d){return d.length==maxLength});return $.extend(maxBin[0],{key:d.key,count:d.values.count})});maxValData=d3.nest().key(function(d){return d.x}).rollup(function(leaves){return leaves.sort(function(d1,d2){return d3.descending(d1.y,d2.y)})}).entries(maxValData);var text=d3.select(context.placeholder).selectAll("text.max-val").data(maxValData,function(d){return d.key});text.enter().append("text").attr("class","max-val"),text.attr("y",function(d){return context.scales.y(d.values[0].y)}),text.exit().remove();var line=text.selectAll("tspan").data(function(d){return d.values});line.enter().append("tspan"),line.exit().remove();var self=this;line.attr("class",function(d){return context.scales.fill(d.key)}).text(function(d){return d.length+" of "+d.count+" "+self.contextProvider.getTerm(d.key,d.all).toLowerCase()}).transition().attr("x",function(d){return context.scales.x(d.x)}).attr("dy",function(d,i){return-5-9*i}).attr("dx",2)}},MaxValuesChart})