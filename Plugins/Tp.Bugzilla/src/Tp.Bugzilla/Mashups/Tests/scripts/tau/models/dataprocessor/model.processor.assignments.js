define(["Underscore","tau/extensions/extension.underscore"],function(a){var b={getAssignmentsForRole:function(b,c){var d=a(c.assignments).select(function(a){return a.role.id==b.id});return d},getAssignments:function(a){var b={groups:[]},c=a.roleEfforts;for(var d=0;d<c.length;d++){var e=c[d].role,f={role:{id:e.id,name:e.name.substring(0,3)+"."},users:[]},g=this.getAssignmentsForRole(e,a);for(var h=0;h<g.length;h++){var i=g[h].generalUser;f.users.push({id:i.id,name:[i.firstName," ",i.lastName.substring(0,1),"."].join(""),assignmentId:g[h].id})}b.groups.push(f)}return b}};return b})