define(["tau/core/templates-factory","tau/ui/templates/implementationHistory/ui.template.implementationHistoryItem"],function(a){var b={name:"implementationHistory",options:{},dependencies:["implementationHistoryItem"],markup:['<div class="tau-implementationHistory">','<div class="tau-historyGridInterpretation">',"{{each(index, stateName) entityStates}}",'<div class="stateName" title="${stateName}">',"<span>${stateName}</span>","</div>","{{/each}}","<div>Date</div>","<div>Related Entities</div>","</div>",'<div class="tau-historyGrid">',"<table>","<tbody>","<tr>",'{{tmpl(historyItems) "implementationHistoryItem"}}',"</tr>","</tbody>","</table>","</div>","</div>"].join("")};return a.register(b)})