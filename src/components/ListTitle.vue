<template>
  <div class="nav">
    <p>{{ getCurrentDate.month }} - {{ getCurrentDate.year }}</p>
    <div class="wrap">
      <input type="radio" id="forex" name="gender" value="forex">
      <label for="forex"> Forex</label><br>
      <input type="radio" id="cyriptoCurrency" name="gender" value="cyriptoCurrency">
      <label for="cyriptoCurrency"> Cyripto currency</label><br>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "getSelectedLang", 
      "getMonths"
      ]),

    getCurrentDate: function() {
      let now = new Date();
      return {
        month: this.getMonths[this.getSelectedLang][now.getMonth()],
        year: now.getUTCFullYear(),
      };
    }
  }
};
</script>

<style scoped>
nav {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

nav p {
  float: left;
}

.wrap {
  float: left;

  margin-left: .7rem;
}


</style>