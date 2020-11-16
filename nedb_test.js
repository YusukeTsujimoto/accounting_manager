var NeDB = require("nedb");
var db = {};
db.users = new NeDB({
  filename: "usersfile"
});

db.users.loadDatabase();

// insert
db.users.insert({ name: "hoge" });
db.users.insert({ name: "fuga" });
db.users.insert({ name: "uga" });

db.users.insert([{ name: "foo" }, { name: "bar" }], function(err, newDoc) {
  console.log("[INSERT]");
  console.log(newDoc);
});

// find
db.users.find({ name: "fuga" }, function(err, docs) {
  console.log("[FIND]");
  console.log(docs);
});
db.users.find({ name: /f*uga/ }, function(err, docs) {
  console.log("[FIND F*]");
  console.log(docs);
});

// remove
db.users.remove({ name: "fuga" }, { multi: true }, function(err, numRemoved) {
  console.log("[REMOVE]");
  console.log(numRemoved);
});
db.users.remove({ name: "uga" }, { multi: true }, function(err, numRemoved) {
  console.log("[REMOVE]");
  console.log(numRemoved);
});
