<template>
  <div class="estimate">
    <h2>見積一覧</h2>
    <router-link to="/estimate">新規登録</router-link>
    <table>
      <th>見積依頼日</th>
      <th>見積番号</th>
      <th>見積日付</th>
      <th>拠点</th>
      <th>見積金額</th>
      <th>契約形態</th>
      <th>契約期間</th>
      <th>見積依頼者</th>
      <th>見積担当者</th>
      <th>状況</th>
      <tr v-for="estimate in estimates" :key="estimate._id">
        <td>{{ estimate.request_date }}</td>
        <td>999999-99</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
      </tr>
    </table>
  </div>
</template>

<script>
// const { ipcRenderer } = require("electron");

export default {
  data() {
    return {
      estimates: [
        {
          _id: "0000",
          request_date: new Date().toLocaleString()
        }
      ]
    };
  }
};
</script>
