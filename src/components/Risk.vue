<template>
  <div>
    <label for="inputRisk" class="form-label" v-if="lang === 'en'">{{risk_lang_pack.title_en}}</label>
    <label for="inputRisk" class="form-label" v-else>{{risk_lang_pack.title_tr}}</label>
    <input type="number" id="inputRisk"
	   class="form-control"
	   aria-describedby="riskHelpBlock"
	   min="0"
	   max="100"
	   v-model="temp_risk"
	   >
    <div id="riskHelpBlock" class="form-text" v-if="lang == 'en'">
      {{risk_lang_pack.summary_en}}
    </div>
    <div id="riskHelpBlock" class="form-text" v-else>
      {{risk_lang_pack.summary_tr}}
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  export default{
      props:["risk",
	     "lang",
	     "risk_lang_pack"],
      data(){
	  return{
	      temp_risk:this.risk
	      }
	  },
      watch:{
	  temp_risk: function(value){
	      eventBus.changeRisk(value)
	      }
	  },
    created(){
	eventBus.changeRisk(this.temp_risk);

	}

  }
</script>

<style>
</style>
