define(["tau/core/templates-factory","tau/ui/templates/list_/grid/BugsTasks/ui.template.list.grid.group"],function(a){var b={name:"list-grid-BugsTasks",markup:['<div class="tau-grid tau-grid-BugsTasks">','   {{tmpl(groups) "list-grid-group-BugsTasks"}}',"</div>"],dependencies:["list-grid-group-BugsTasks"]};return a.register(b)})