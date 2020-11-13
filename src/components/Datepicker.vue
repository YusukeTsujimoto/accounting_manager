<template>
  <div id="app">
    <datepicker :language="ja" name="create_date"></datepicker>
  </div>
</template>

<script>
import datepicker from "vuejs-datepicker";
import { ja } from "vuejs-datepicker/dist/locale";

export default {
  components: {
    datepicker
  },
  computed: {
    ja() {
      return ja;
    }
  }
};
</script>
