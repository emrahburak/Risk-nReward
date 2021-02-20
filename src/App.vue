<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
  	<app-header></app-header>
	<hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
	<app-risk :risk="risk"></app-risk>
      </div>
      <div class="col-md-6">
      <app-list :risk="risk" :limit="limit" :days="days"></app-list>
      </div>
      <div class="col-md-4">
  	<app-limit :limit="limit"></app-limit>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Limit from './components/Limit'
import Risk from './components/Risk'

export default {
    data(){
	return{
	    risk: 3,
	    limit: 1000,
	    days:22
	    }
	},
    components:{
	appHeader:Header,
	appRisk:Risk,
	appLimit:Limit,
	appList:List,
    },
}
</script>

<style>

</style>
