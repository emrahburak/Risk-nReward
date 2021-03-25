<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
  	<app-header>
	</app-header>
	<hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
	<app-risk>
	</app-risk>
      </div>
      <div class="col-md-4">
      </div>
      <div class="col-md-4">
  	<app-limit>
	</app-limit>
      </div>
    </div>
    <br />
      <div class="row">
	<div class="col-md-12">
      	  <app-list>
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

export default {
    components:{
	appHeader:Header,
	appRisk:Risk,
	appLimit:Limit,
	appList:List,
    }
}
</script>

<style>

</style>
