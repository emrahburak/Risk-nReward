<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
  	<app-header :langs="langs"
		    :lang="lang"
		    >
	</app-header>
	<hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
	<app-risk :risk="risk"
		  :lang="lang"
		  >
	</app-risk>
      </div>
      <div class="col-md-4">
      </div>
      <div class="col-md-4">
  	<app-limit :limit="limit"
		  :lang="lang"
		  >
	</app-limit>
      </div>
    </div>
    <br />
      <div class="row">
	<div class="col-md-12">
      	  <app-list :risk="risk"
      		    :limit="limit"
      		    :days="days"
      		    :lang="lang"
      		    >
      	  </app-list>
	</div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Limit from './components/Limit'
import Risk from './components/Risk'
import {eventBus} from './main';

export default {
    data(){
	return{
	    risk: 3,
	    limit: 1000,
	    langs:["en","tr"],
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
	}
}
</script>

<style>

</style>
