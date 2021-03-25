<template>
  <div>
    <label for="sermaye" class="form-label" v-if="getSelectedLang === 'en'">{{getLimitLang.title_en}}</label>
    <label for="sermaye" class="form-label" v-else>{{getLimitLang.title_tr}}</label>
    <input type="number" id="sermaye" class="form-control" aria-describedby="sermayeHelpBlock" v-model="limit">
    <div  id="sermayeHelpBlock" class="form-text" v-if="getSelectedLang === 'en'">
      {{getLimitLang.summary_en}}
    </div>
    <div  id="sermayeHelpBlock" class="form-text" v-else>
      {{getLimitLang.summary_tr}}
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
      computed:{
	  ...mapGetters([
	      "getLimitLang",
	      "getSelectedLang",
	  ]),
	  limit:{
	      get(){
		  return this.$store.getters.getLimit

	      },
	      set(value){
		  this.$store.commit('setLimit',value)
		  }
	      }
	  }
  }
</script>
<style>
</style>
