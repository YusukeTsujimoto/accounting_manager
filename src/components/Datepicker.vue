<template>
  <datepicker
    :language="ja"
    :value="this.default"
    :format="DatePickerFormat"
  ></datepicker>
</template>

<script>
import datepicker from "vuejs-datepicker";
import { ja } from "vuejs-datepicker/dist/locale";

export default {
  data() {
    return {
      default: new Date().toLocaleString(),
      DatePickerFormat: "yyyy-MM-dd"
    };
  },
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
