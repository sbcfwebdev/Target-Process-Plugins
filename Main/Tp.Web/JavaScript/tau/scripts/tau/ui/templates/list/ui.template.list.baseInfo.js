define(["tau/core/templates-factory","tau/ui/templates/list/ui.template.list.baseInfo.item"],function(a){var b={name:"request-list",options:{contentSelector:".request-list"},markup:['<div class="ui-base-info-list-content">','<table class="ui-table base-info-list" cellpadding="4" cellspacing="0" {{if items.length === 0}}style="display:none"{{/if}}>',"<tbody>","{{each items}}",'    {{tmpl($value, {index:$index}) "list-base-info-item"}}',"{{/each}}","</tbody>","</table>","</div>"].join(""),dependencies:["list-base-info-item"]};return a.register(b)})