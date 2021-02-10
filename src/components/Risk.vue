<template>
  <div>
    <label for="inputRisk" class="form-label">Günlük Risk Oranı</label>
    <input type="number" id="inputRisk"
	   class="form-control"
	   aria-describedby="riskHelpBlock"
	   min="0"
	   max="100"
	   :value="riskRatio"
	   >
    <div id="riskHelpBlock" class="form-text">
       Herzaman ufak oyna!
    </div>
  </div>
</template>

<script>
  export default{
      data(){
	  return{
	      riskRatio: 3
	      }
      }
  }
</script>

<style>
</style>
