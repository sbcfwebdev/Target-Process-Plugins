define(["tau/core/templates-factory"],function(a){var b={name:"customField-dropdown",markup:['<div class="ui-customfield ui-customfield-dropdown {{if !value}}ui-customfield_empty_true{{/if}}">',"   <table>","   <tbody>","   <tr>",'       <td class="ui-customfield__label">${name}</td>','       <td class="ui_custom_field_value_container"><div class="ui-customfield__value">${value}</div></td>',"   </tr>","   </tbody>","   </table>","</div>"]};return a.register(b)})