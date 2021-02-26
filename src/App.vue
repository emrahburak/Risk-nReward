<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
	
  	<app-header :langs="langs"
		    :lang="lang"
		    :header_lang_pack="header_lang_pack">
	</app-header>
	<hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
	<app-risk :risk="risk"
		  :lang="lang"
		  :risk_lang_pack="risk_lang_pack">
	</app-risk>
      </div>
      <div class="col-md-6">
	<app-list :risk="risk"
		  :limit="limit"
		  :days="days"
		  :lang="lang"
		  :list_lang_pack="list_lang_pack">
	</app-list>
      </div>
      <div class="col-md-4">
  	<app-limit :limit="limit"
		  :lang="lang"
		  :limit_lang_pack="limit_lang_pack"
		   ></app-limit>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Limit from './components/Limit'
import Risk from './components/Risk'
import {eventBus,langPack} from './main';

export default {
    data(){
	return{
	    risk: 3,
	    limit: 1000,
	    langs:["en","tr"],
	    header_lang_pack:{},
	    limit_lang_pack:{},
	    risk_lang_pack:{},
	    list_lang_pack:{},
	    lang:"en"
	    }
	},
    components:{
	appHeader:Header,
	appRisk:Risk,
	appLimit:Limit,
	appList:List,
    },
    computed:{
	days: function(){
	    let date = new Date();
	    return new Date(date.getUTCFullYear(), date.getUTCMonth()+1,0).getDate()

	    }
	},
    created(){
	eventBus.changeDaysLimits(this.days);
	eventBus.$on('langWasEdited',(lang)=>{
	    this.lang = lang;
	    })
	this.header_lang_pack = langPack.header_lang_pack;
	this.limit_lang_pack = langPack.limit_lang_pack;
	this.risk_lang_pack = langPack.risk_lang_pack;
	this.list_lang_pack = langPack.list_lang_pack;
	}
}
</script>

<style>

</style>
