<template>
  <div class="container">
    <select>
      <option v-for="item in items" :key="item.name" value="item.name">{{
        item.name
      }}</option>
    </select>
  </div>
</template>

<script>
//インメモリでDB作成
var Database = require("nedb");
var namelistDB = new Database();
//データ読み込み挿入
import dbData from "./db/namelist.json";
namelistDB.insert(dbData);

export default {
  data() {
    return {
      findWord: "",
      items: ""
    };
  },
  methods: {
    dbQuery: function() {
      namelistDB.find(
        { name: new RegExp(".*" + this.findWord + ".*", "i") },
        (err, doc) => {
          this.items = doc;
        }
      );
    }
  },
  name: "index"
};
</script>
