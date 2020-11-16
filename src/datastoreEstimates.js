import dbData from "./db/database.json";

class Estimates {
  constructor() {}

  getEstimates() {
    var NeDB = require("nedb");
    var ret = new NeDB();
    ret.insert(dbData);
    return ret;
  }

  insertEstimate(estimate) {
    var NeDB = require("nedb");
    var db = {};
    db.estimates = new NeDB({
      filename: "./db/database.json"
    });
    db.estimates.loadDatabase();
    db.estimates.insert(estimate, function(err) {
      console.dir(err);
      db.estimates.find({}, (err, docs) => {
        console.dir(docs);
      });
    });
  }
}

function createEstimates() {
  return new Estimates();
}
export default createEstimates;
