<template>
  <div>
    <div class="row">
      <div class="col-md-8">
	<h2 v-if="getSelectedLang === 'en'">{{getHeaderLang.title_en}}</h2>
	<h2 v-else>{{getHeaderLang.title_tr}}</h2>
      </div>
      <div class="col-md-4">
	<br />
	<br />
	<select class="form-select" aria-label="Default select example" @change="selectEvent">
	  <option v-for="(lang,index) in getLangOption" :key="index" :value="lang">{{lang}}</option>
	</select>
      </div>
    </div>
  </div>
</template>


<script>
  import {mapGetters} from 'vuex'
  export default{
      computed:{
	  ...mapGetters([
	      "getHeaderLang",
	      "getLangOption",
	      "getSelectedLang"
	      ])
	  },
      methods:{
	  selectEvent(event){
	      this.$store.commit("setLangOption",event.target.value);
	  }
      }
  }
</script>


<style scoped>
  h2{
      margin-right:100px;
  }
</style>
