define(["tau/core/templates-factory","tau/ui/templates/title/ui.template.title.simple"],function(a){var b={name:"cell-name",markup:['<span class="tau-title-container">','<div class="tau-title" title="${name}" runas="title" data-context:general:id="${id}" data-context:general:entity-type:name="${__type}" data-template:name="ui.template.title.simple">${name}</div>',"</span>","{{if tags.length}}",'   <span class="tau-tags">${tags[0]}</span>','   {{if tags.length > 1}}<span class="tau-tags">&#133;</span>{{/if}}',"{{/if}}"]};return a.register(b)})