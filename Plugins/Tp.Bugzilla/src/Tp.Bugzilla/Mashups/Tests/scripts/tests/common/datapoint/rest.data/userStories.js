define(["Underscore","tests/common/datapoint/rest.data/entityStates","tests/common/datapoint/rest.data/projects"],function(a,b,c){return{getUserStories:function(){var d=b.getEntityStates(),e=c.getProjects(),f=function(b,c){return a(d).detect(function(a){return a.name==b&&a.entityType.name=="UserStory"&&a.process.name==c})},g=function(b){return a(e).detect(function(a){return a.id==b})},h=[{id:11,__type:"userStory",name:"US1",numericPriority:1,entityState:f("Open","All Practices"),tags:"us1, epic",project:g(1),priority:{id:1,name:"Low",importance:5},release:{id:1,name:"Release 1"},iteration:{id:11,name:"Iteration 1"},effort:56,effortCompleted:8,effortToDo:48,timeSpent:9,timeRemain:41,"tasks-effort-sum":1,"tasks-effortToDo-sum":1,roleEfforts:[{id:318,effort:1,effortToDo:1,role:{id:1,name:"Developer",__type:"role"}}],assignments:[{id:309,role:{id:1,name:"Developer",__type:"role"},generalUser:{id:1,firstName:"Vasili",lastName:"Ivanov"}},{id:310,role:{id:1,name:"Developer",__type:"role"},generalUser:{id:2,firstName:"Ivan",lastName:"Vasilijev"}}],"tasks-count":0},{id:12,__type:"userStory",name:"US2",numericPriority:2,entityState:f("Done","Kanban"),tags:"",project:g(279),priority:{id:1,name:"Low",importance:5},release:{id:1,name:"Release 1"},iteration:{id:11,name:"Iteration 2"},effort:12,effortCompleted:6,effortToDo:6,timeSpent:3,timeRemain:18,"tasks-effort-sum":1,"tasks-effortToDo-sum":1,roleEfforts:[{id:318,effort:1,effortToDo:1,role:{id:1,name:"Developer",__type:"role"}}],assignments:[{id:309,role:{id:1,name:"Developer",__type:"role"},generalUser:{id:1,firstName:"Vasili",lastName:"Ivanov"}},{id:310,role:{id:1,name:"Developer",__type:"role"},generalUser:{id:2,firstName:"Ivan",lastName:"Vasilijev"}}],"tasks-count":0},{id:13,__type:"userStory",name:"US3",numericPriority:3,entityState:f("In Progress","Kanban"),tags:"us3, wow",project:g(279),priority:{id:1,name:"Low",importance:5},release:null,iteration:null,effort:16,effortCompleted:8,effortToDo:8,timeSpent:5,timeRemain:7,"tasks-effort-sum":1,"tasks-effortToDo-sum":1,roleEfforts:[{id:318,effort:1,effortToDo:1,role:{id:1,name:"Developer",__type:"role"}}],assignments:[],"tasks-count":0}];return h}}})