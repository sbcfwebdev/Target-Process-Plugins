define(["tau/core/templates-factory"],function(a){var b={name:"board.settings",engine:"jqote2",markup:['<div class="tau-board-settings">','<div class="tau-rows-settings">',"<h4>Rows</h4>",'<p class="tau-entity-selector">','<select class="tau-select"><option>Teams</option></select>','<input type="text" placeholder="Filter" class="tau-in-text tau-filter">',"</p>","</div>",'<div class="tau-cols-settings">',"<h4>Cols</h4>",'<p class="tau-entity-selector">','<select class="tau-select"><option>Projects</option></select>','<input type="text" placeholder="Filter" class="tau-in-text tau-filter">',"</p>","</div>",'<div class="tau-content-settings">','<div class="tau-displayed-entities">',"<h4>What you want to see?</h4>","<p>",'<button class="tau-btn">Feature</button>','<button class="tau-btn">User Story</button>','<button class="tau-btn">Task</button>','<button class="tau-btn">Bug</button>','<button class="tau-btn">Project</button>','<button class="tau-btn">Release</button>','<button class="tau-btn">Iteration</button>','<button class="tau-btn">Person</button>','<button class="tau-btn">Time</button>','<button class="tau-btn">Request</button>','<button class="tau-btn">Test Case</button>','<button class="tau-btn">Test Plan</button>','<button class="tau-btn">Test Plan Run</button>',"</p>",'<input type="text" placeholder="Filter" class="tau-in-text tau-filter" />',"</div>",'<div class="tau-entity-hierarchy">',"<h4>How to show entities hierarchy?</h4>","<p>",'<label><input type="radio" checked="" name="tau-board-settings-entity-hierarchy">Inside a card</label>','<label><input type="radio" name="tau-board-settings-entity-hierarchy">As separate cards</label>',"</p>","</div>","</div>",'<div class="tau-settings-detalizator"><button class="tau-btn">More settings</button></div>',"</div>"],dependencies:[]};return a.register(b)})