<template>
  <div class="estimate">
    <h2>見積作成</h2>
    <form>
      <label for="request_date">見積依頼日</label>
      <Datepicker id="request_date" v-model="this.estimate.request_date" />
      <label for="estimate_number">見積番号</label><br />
      <input type="text" id="estimate_number" /><br />
      <label for="estimate_date">見積日付</label>
      <Datepicker id="estimate_date" />
      <label for="hub">拠点</label><br />
      <input type="text" id="hub" /><br />
      <label for="subject">件名</label><br />
      <input type="text" id="subject" /><br />
      <label for="estimated_amount">見積金額</label><br />
      <input type="text" id="estimated_amount" /><br />
      <label for="type_of_contract">契約形態</label><br />
      <input type="text" id="type_of_contract" /><br />
      <label for="start_date">契約開始日</label>
      <Datepicker id="start_date" />
      <label for="end_date">契約終了日</label>
      <Datepicker id="end_date" />
      <label for="estimate_requester">見積依頼者</label><br />
      <input type="text" id="estimate_requester" /><br />
      <label for="estimator">見積担当者</label><br />
      <input type="text" id="estimator" /><br />
      <label for="status">状況</label><br />
      <input type="text" id="status" /><br />
    </form>
    <button @click="onclick">保存</button>
  </div>
</template>

<script>
import Datepicker from "@/components/Datepicker.vue";
const { ipcRenderer } = require("electron");

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      estimate: {
        request_date: new Date().toLocaleString()
      }
    };
  },
  methods: {
    onclick: function() {
      ipcRenderer.send("save_estimate", this.estimate);
    }
  }
};
</script>

<style scoped>
.estimate {
  text-align: left;
}
</style>
