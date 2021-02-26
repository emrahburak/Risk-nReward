<template>
  <div>
    <label for="sermaye" class="form-label" v-if="lang === 'en'">{{limit_lang_pack.title_en}}</label>
    <label for="sermaye" class="form-label" v-else>{{limit_lang_pack.title_tr}}</label>
    <input type="text" id="sermaye" class="form-control" aria-describedby="sermayeHelpBlock" v-model="temp_limit">
    <div  id="sermayeHelpBlock" class="form-text" v-if="lang === 'en'">
      {{limit_lang_pack.summary_en}}
    </div>
    <div  id="sermayeHelpBlock" class="form-text" v-else>
      {{limit_lang_pack.summary_tr}}
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  export default{
      props:["limit","lang","limit_lang_pack"],
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
