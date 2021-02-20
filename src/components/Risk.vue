<template>
  <div>
    <label for="inputRisk" class="form-label">Günlük Risk Oranı</label>
    <input type="number" id="inputRisk"
	   class="form-control"
	   aria-describedby="riskHelpBlock"
	   min="0"
	   max="100"
	   v-model="temp_risk"
	   >
    <div id="riskHelpBlock" class="form-text">
       Herzaman ufak oyna!
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  export default{
      props:["risk"],
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
