<template>
  <div>
    <label for="inputRisk" class="form-label" v-if="lang === 'en'">{{getRiskLang.title_en}}</label>
    <label for="inputRisk" class="form-label" v-else>{{getRiskLang.title_tr}}</label>
    <input type="number" id="inputRisk"
	   class="form-control"
	   aria-describedby="riskHelpBlock"
	   min="0"
	   max="100"
	   v-model="temp_risk"
	   >
    <div id="riskHelpBlock" class="form-text" v-if="lang == 'en'">
      {{getRiskLang.summary_en}}
    </div>
    <div id="riskHelpBlock" class="form-text" v-else>
      {{getRiskLang.summary_tr}}
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  import {mapGetters} from 'vuex'
  export default{
      props:["risk",
	     "lang",
	    ],
      data(){
	  return{
	      temp_risk:this.risk
	      }
	  },
      computed:{
	  ...mapGetters([
	      "getRiskLang"
	      ])
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
