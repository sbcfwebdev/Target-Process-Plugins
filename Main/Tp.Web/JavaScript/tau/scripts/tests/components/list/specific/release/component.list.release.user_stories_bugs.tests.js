define(["Underscore","tests/components/list/specific/component.list.spec.base","tau/models/dataProviders/release/release.model.provider.user_stories_bugs.items","tau/models/dataProviders/release/release.model.provider.user_stories_bugs.groups","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity"],function(a,b,c,d){var e=function(){var a=b.Testcase.create("[list.release.user_stories_bugs]",c,d,function(){var a={us:"UserStory",bug:"Bug"},b={kanban:"Kanban",scrum:"Scrum"},c={p1:"Good"},d={s1:"Good"},e={p1:{name:"Project1",process:"kanban"},p2:{name:"Project2"}},f={us_open:{name:"Open",nextStates:["us_inprogress","us_done"],entityType:"us",process:"kanban",isInitial:!0},us_inprogress:{name:"In Progress",nextStates:["us_done"],entityType:"us",process:"kanban"},us_done:{name:"Done",nextStates:[],entityType:"us",process:"kanban",isFinal:!0},bug_open:{name:"Open",nextStates:["bug_coded"],entityType:"bug",process:"kanban",isInitial:!0},bug_coded:{name:"Coded",nextStates:["bug_done"],isCommentRequired:!0,entityType:"bug",process:"kanban"},bug_done:{name:"Fixed",nextStates:[],isCommentRequired:!0,entityType:"bug",process:"kanban",isFinal:!0}},g={r1:{name:"Release",userStories:["us1","us2"],bugs:["bug1","bug2"]}},h={us1:{name:"US1",entityState:"us_open",priority:"p1",project:"p1"},us2:{name:"US2",entityState:"us_open",priority:"p1",project:"p1"}},i={bug1:{name:"Bug1",entityState:"bug_open",priority:"p1",severity:"s1",project:"p1"},bug2:{name:"Bug2",entityState:"bug_done",priority:"p1",severity:"s1",project:"p1"}};this.loadFixtures({entityType:a,projects:e,entityStates:f,releases:g,userStories:h,bugs:i,priority:c,severity:d,processes:b}),this.setProject(this.data.project.p1),this.setEntity(this.data.release.r1)});a.add(new b.TestMarkup({groups:[{title:"Open",items:["US1","US2","Bug1"]},{title:"In Progress",items:[]},{title:"Coded",items:[]},{title:"Done, Fixed",items:["Bug2"]}]})),a.add(new b.TestState);var e=new b.Test;a.add(new b.Test({name:"dnd simple prioritize",test:function(){var b=this.$el.find("[role=group]:first"),c=b.find("[role=item]:eq(0)"),d=b.find("[role=item]:eq(1)"),f=a.data.userStory.us1,g=a.data.userStory.us2,h=a.data.bug.bug1;e.registerPrioritize(f.id,{beforeId:h.id,afterId:g.id}),e.startMove(c),e.moveAfter(c,d),e.endMove()}})),a.add(new b.Test({name:"dnd change state",test:function(){var b=this.$el.find("[role=group]:first"),c=this.$el.find("[role=group]:eq(1)"),d=b.find("[role=item]:eq(0)"),f=a.data.userStory.us1,g=a.data.entityState.us_inprogress;e.registerPrioritize(f.id,{beforeId:null,afterId:null}),e.registerChangeState(f,a.data.entityState.us_inprogress),e.$el=this.$el,e.checkGroupsAvailability(4,0),e.startMove(d),e.checkGroupsAvailability(3,1),e.moveAfter(d,c),e.endMove(),e.checkGroupsAvailability(4,0)}})),a.add(new b.Test({name:"dnd change state when target group is shared between entities",test:function(){var b=this.$el.find("[role=group]:first"),c=this.$el.find("[role=group]:eq(3)");c.find("[role=title]").click();var d=b.find("[role=item]:eq(0)"),f=a.data.userStory.us1,g=a.data.entityState.us_done,h=a.data.bug.bug2;e.registerPrioritize(f.id,{beforeId:null,afterId:h.id}),e.registerChangeState(f,g),e.$el=this.$el,e.checkGroupsAvailability(4,0),e.startMove(d),e.checkGroupsAvailability(3,1),e.moveAfter(d,c),e.endMove(),e.checkGroupsAvailability(4,0)}})),a.add(new b.Test({name:"dnd change state use comment",test:function(){var b="fuck you",c=this.$el.find("[role=group]:first"),d=this.$el.find("[role=group]:eq(2)"),f=c.find("[role=item]:eq(2)"),g=a.data.bug.bug1,h=a.data.entityState.bug_coded;e.$el=this.$el,e.checkGroupsAvailability(4,0),e.startMove(f),e.checkGroupsAvailability(2,2),e.moveAfter(f,d),e.checkBubble(f),e.cancelBubble(f),c=this.$el.find("[role=group]:first"),d=this.$el.find("[role=group]:eq(2)"),f=c.find("[role=item]:eq(2)"),e.registerComment(g,b),e.registerPrioritize(g.id,{beforeId:null,afterId:null}),e.registerChangeState(g,h),e.$el=this.$el,e.checkGroupsAvailability(4,0),e.startMove(f),e.checkGroupsAvailability(2,2),e.moveAfter(f,d),e.checkBubble(f),e.submitBubble(f,b),e.endMove(),e.checkGroupsAvailability(4,0)}})),a.run()};return{run:e}})