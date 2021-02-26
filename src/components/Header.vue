<template>
  <div>
    <div class="row">
      <div class="col-md-8">
	<h2 v-if="temp_lang === 'en'">{{header_lang_pack.title_en}}</h2>
	<h2 v-else>{{header_lang_pack.title_tr}}</h2>
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
      props:["langs",
	     "header_lang_pack",
	     "lang"
	    ],
      data(){
	  return{
	      temp_lang: this.lang
	      }
      },
      methods:{
	  selectEvent: function(event){
	      this.temp_lang = event.target.value;
	      }
	  },
      watch:{
	  temp_lang: function(value){
	      eventBus.changeLang(value);
	  },
	  created(){
	      eventBus.changeLang(this.temp_lang);
	      }

	  }

  }
</script>


<style scoped>
  h2{
      margin-right:100px;
  }
</style>
