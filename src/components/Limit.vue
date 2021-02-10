<template>
  <div>
    <label for="sermaye" class="form-label">Sermaye</label>
    <input type="text" id="sermaye" class="form-control" aria-describedby="sermayeHelpBlock" v-model="sermaye">
    <div id="sermayeHelpBlock" class="form-text">
      Sermaye girin..
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  export default{
      data(){
	  return{
	      sermaye:10000

	  }

      },
	  created(){
	      eventBus.$on('limitWasEdited',(limit)=>{
		  this.sermaye = limit
		  })
	  }

  }
</script>

<style>
</style>
