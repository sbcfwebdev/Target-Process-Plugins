define(["tau/core/templates-factory"],function(a){var b={name:"ui.lookswitcher",markup:['<div class="ui-lookswitcher tau-look-switcher">','   {{if !loveNewLook }}<a class="ui-lookswitcher-love-link">Always use this awesome UI</a>{{/if}}','   {{if loveNewLook }}<a class="ui-lookswitcher-hate-link">Switch back to old look</a>{{/if}}',"</div>"],dependencies:[]};return a.register(b)})