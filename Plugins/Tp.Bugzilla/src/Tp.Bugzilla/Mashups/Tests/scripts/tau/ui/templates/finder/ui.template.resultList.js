define(["tau/core/templates-factory","tau/ui/templates/finder/ui.template.resultList.row"],function(a){var b={name:"resultList",markup:['<div class="ui-resultList">','<div class="tau-no-results">${emptyMessage}</div>','    <table cellspacing="0" cellpadding="4" class="tau-result-list">',"        <tbody>",'            {{tmpl(items) "resultList-row"}}',"        </tbody>","    </table>",'<div class="tau-resultList-load-more">loading items...</div>',"</div>"],dependencies:["resultList-row"]};return a.register(b)})