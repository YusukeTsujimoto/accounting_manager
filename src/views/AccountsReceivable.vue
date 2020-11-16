<template>
  <div class="about">
    <h1>売掛編集</h1>
    <form>
      <select name="kind">
        <option value="見積書">見積書</option>
        <option value="請求書">請求書</option>
      </select>
      <br />
      <input type="text" placeholder="管理番号" v-model="manage_number" />
      <Datepicker />
      <select>
        <option v-for="item in items" :key="item.name" value="item.name">
          {{ item.name }}
        </option>
      </select>
    </form>
    <button @click="dbQuery" class="btn btn-success btn-lg">登録</button>
  </div>
</template>

<script>
import Datepicker from "../components/Datepicker";
// import CustomersComboBox from "../components/CustomersComboBox";

//インメモリでDB作成
var Database = require("nedb");
// var namelistDB = new Database();
var db = new Database({
  filename: "db/database.db",
  autoload: true
});

var doc = {
  name: "hoge",
  age: 20
};

db.insert(doc, function(err) {
  console.dir(err);
  db.find({}, (err, docs) => {
    console.dir(docs);
  });
});
//データ読み込み挿入
// import dbData from "../components/db/namelist.json";
// namelistDB.insert(dbData);

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      findWord: "",
      items: "",
      manage_number: ""
    };
  },
  methods: {
    dbQuery: function() {
      var db = new Database({
        filename: "../components/db/test.db",
        autoload: true
      });
      var doc = {
        manage_number: "0000"
      };
      db.insert(doc, (err, newDoc) => {
        console.log(err);
        console.log(newDoc);
      });
    }
  },
  name: "index"
};
</script>
