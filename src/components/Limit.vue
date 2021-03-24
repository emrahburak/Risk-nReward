<template>
  <div>
    <label for="sermaye" class="form-label" v-if="lang === 'en'">{{getLimitLang.title_en}}</label>
    <label for="sermaye" class="form-label" v-else>{{getLimitLang.title_tr}}</label>
    <input type="text" id="sermaye" class="form-control" aria-describedby="sermayeHelpBlock" v-model="temp_limit">
    <div  id="sermayeHelpBlock" class="form-text" v-if="lang === 'en'">
      {{getLimitLang.summary_en}}
    </div>
    <div  id="sermayeHelpBlock" class="form-text" v-else>
      {{getLimitLang.summary_tr}}
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  import {mapGetters} from 'vuex'
  export default{
      props:["limit","lang",],
      data(){
	  return{
	      temp_limit:this.limit,
	  }
      },
      computed:{
	  ...mapGetters([
	      "getLimitLang"
	      ])
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
