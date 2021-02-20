<template>
  <div>
    <label for="sermaye" class="form-label">Sermaye</label>
    <input type="text" id="sermaye" class="form-control" aria-describedby="sermayeHelpBlock" v-model="temp_limit">
    <div id="sermayeHelpBlock" class="form-text">
      Sermaye girin..
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  export default{
      props:["limit"],
      data(){
	  return{
	      temp_limit:this.limit,
	  }
      },
      watch:{
	  temp_limit: function(value){
	      eventBus.changeLimit(value)
	      }
	  }
  }
</script>

<style>
</style>
