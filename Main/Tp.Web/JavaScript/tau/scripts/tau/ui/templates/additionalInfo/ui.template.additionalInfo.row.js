define(["tau/core/templates-factory","tau/ui/tags/ui.tag.term","tau/ui/templates/common/ui.template.attributeValue","tau/ui/templates/common/ui.template.user"],function(a,b){var c={name:"additionalInfo-row",tags:[b],markup:['{{if type !="owner" }}','<tr class="ui-info-${type.toLowerCase()} ui-additionalinfo {{if !value.name}}ui-additionalinfo_empty_true{{/if}}">','   <td class="ui-additionalinfo__label">','       <span>{{term(type) "name"}}</span>',"   </td>",'   <td class="val ui-additionalinfo__value">','       {{tmpl(value) "common-attributeValue"}}','       <span class="additional-info-url">',"           {{if externalUrl}}",'               <a class="external-view south" href="${externalUrl}" original-title="View ${value.name} Information" title="View ${value.name} Information" target="_blank"></a>',"           {{/if}}","       </span>","   </td>","</tr>","{{else}}",'<tr class="ui-info-${type.toLowerCase()} ui-additionalinfo {{if !value.name}}ui-additionalinfo_empty_true{{/if}}">','   <td class="ui-additionalinfo__label">',"Owner","   </td>",'   <td class="val ui-additionalinfo__value">','       {{tmpl(value) "user"}}',"   </td>","</tr>","{{/if}}"],dependencies:["common-attributeValue","user"]};return a.register(c)})