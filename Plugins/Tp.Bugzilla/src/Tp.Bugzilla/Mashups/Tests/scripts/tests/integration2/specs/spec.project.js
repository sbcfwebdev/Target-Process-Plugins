define(["Underscore","StoreSpec"],function(a,b){var c=b.create("Project API"),d="preved"+Math.random();return c.test("should allow to create").type("project").config("$set",{name:d}).config("fields",["id","name"]).method("save").expect(function(b){var c=b[0].data;ok(a.isNumber(b.Id),"Return id"),ok(a.isString(b.Name),"Return name"),equals(b.Name,d,"Return name")}),c})