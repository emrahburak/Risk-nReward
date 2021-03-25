<template>
  <div>
    <label for="inputRisk" class="form-label" v-if="getSelectedLang === 'en'">{{getRiskLang.title_en}}</label>
    <label for="inputRisk" class="form-label" v-else>{{getRiskLang.title_tr}}</label>
    <input type="number" id="inputRisk"
	   class="form-control"
	   aria-describedby="riskHelpBlock"
	   min="0"
	   max="100"
	   v-model="risk"
	   >
    <div id="riskHelpBlock" class="form-text" v-if="getSelectedLang == 'en'">
      {{getRiskLang.summary_en}}
    </div>
    <div id="riskHelpBlock" class="form-text" v-else>
      {{getRiskLang.summary_tr}}
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
      computed:{
	  ...mapGetters([
	      "getRiskLang",
	      "getSelectedLang"
	  ]),
	  risk:{
	      get(){
		  return this.$store.getters.getRisk
	      },
	      set(value){
		  this.$store.commit("setRisk",value)
		  }
	      }
	  }
  }
</script>

<style>
</style>
