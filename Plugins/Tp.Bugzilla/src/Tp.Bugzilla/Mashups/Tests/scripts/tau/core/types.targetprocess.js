define(["Underscore","tau/core/types","tau/core/types.targetprocess.generated"],function(a,b,c){var d=function(a){var b=[];for(var c=0,d=a.length;c<d;c++){var e=a.charAt(c);c===0?e=e.toUpperCase():e===e.toUpperCase()&&b.push(" "),b.push(e)}return b.join("")},e=function(a){return{key:a,val:a}},f=function(a){var b=a.length-1;if(a.charAt(b)==="y"){var c=a.substring(0,b),d="ies";a=c+d}else a+="s";return{key:a,val:a}},g=function(a){var b=a.split(" "),c=b.length,d=c-1||0,e=b[d];return{key:a+" Big Icon Text",val:e}},h=function(a){var b=a.split(" "),c=b.length,d=c-1||0,e=b[d];return{key:a+" Small Icon Text",val:e.charAt(0)}},i=function(a){if(a&&a.entityType&&a.entityType.name)return a.entityType.name;throw"type of entity is not detected"},j=function(a){var b=d(a);return{name:e(b),names:f(b),iconBig:g(b),iconSmall:h(b)}};return a.each(c,function(a){a.name==="userStory"&&(a.aliases.unshift("story","stories","us"),a.simpleFields.push("tasks-effort-sum","tasks-effortToDo-sum"));if(a.name==="general"||a.name==="assignable")a.isParentType=!0,a.discriminator={entityType:["id","name"]},a.detectType=i;(a.parent==="general"||a.parent==="assignable")&&a.simpleFields.push("customFields"),a.terms=j(a.name),a.name==="process"&&a.refs&&a.refs.customFields&&delete a.refs.customFields,a.name==="processInfo"&&a.refs&&(a.refs={}),a.name==="context"&&(a.refs||(a.refs={}),a.refs.culture&&delete a.refs.culture,a.refs.selectedProjects={list:!0,name:"project"},a.simpleFields=["id","acid"]),b.register(a)}),b.register({name:"implementationHistory",aliases:["stats"]}),b.register({name:"prioritizer",fields:["id"],refs:[]}),b})