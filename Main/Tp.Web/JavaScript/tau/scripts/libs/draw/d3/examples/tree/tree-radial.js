var r=480,tree=d3.layout.tree().size([360,r-120]).separation(function(a,b){return(a.parent==b.parent?1:2)/a.depth}),diagonal=d3.svg.diagonal.radial().projection(function(a){return[a.y,a.x/180*Math.PI]}),vis=d3.select("#chart").append("svg").attr("width",r*2).attr("height",r*2-150).append("g").attr("transform","translate("+r+","+r+")");d3.json("../data/flare.json",function(a){var b=tree.nodes(a),c=vis.selectAll("path.link").data(tree.links(b)).enter().append("path").attr("class","link").attr("d",diagonal),d=vis.selectAll("g.node").data(b).enter().append("g").attr("class","node").attr("transform",function(a){return"rotate("+(a.x-90)+")translate("+a.y+")"});d.append("circle").attr("r",4.5),d.append("text").attr("dx",function(a){return a.x<180?8:-8}).attr("dy",".31em").attr("text-anchor",function(a){return a.x<180?"start":"end"}).attr("transform",function(a){return a.x<180?null:"rotate(180)"}).text(function(a){return a.name})})