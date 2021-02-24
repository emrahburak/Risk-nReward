<template>
  <div>
    <div class="row">
      <div class="col-md-8">
	<h2>Risk/Reward Ratio & Capital</h2>
      </div>
      <div class="col-md-4">
	<br />
	<br />
	<select class="form-select" aria-label="Default select example" @change="selectEvent">
	  <option v-for="(lang,index) in langs" :key="index" :value="lang">{{lang}}</option>
	</select>
      </div>
    </div>
  </div>
</template>


<script>
  import {eventBus} from '../main';
  export default{
      data(){
	  return{
	      langs:["en","tr"],
	      lang:""

	      }
      },
      methods:{
	  selectEvent: function(event){
	      this.lang = event.target.value;
	      }
	  },
      watch:{
	  lang: function(value){
	      eventBus.changeLang(value);
	  },
	  created(){
	      eventBus.changeLang(this.lang);
	      }

	  }

  }
</script>


<style scoped>
  h2{
      margin-right:100px;
  }
</style>
