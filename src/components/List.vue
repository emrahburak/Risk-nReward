<template>
  <div>
    <table class="table">
      <thead>
	<tr>
	  <th scope="col">#</th>
	  <th scope="col">Sermaye</th>
	  <th scope="col">Gün Sonu</th>
	</tr>
      </thead>
      <tbody>
	<tr v-for="(number,index) in temp_days" :key="index">
	  <th scope="row">{{number}}</th>
	  <td>{{ }}</td>
	  <td>{{wrapper(wrapped(temp_limit))}}</td>
	</tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  
  export default{
      props:["risk","limit", "days"],
      data(){
	  return{
	      temp_risk: this.risk,
	      temp_limit: this.limit,
	      temp_days: this.days,
	      end_of_day:0
	      }
      },
      methods:{
	  wrapper(value){
	      return tempvalue;
	  },
	  wrapped(data){

	      return data - (data/100) * this.temp_risk;
	      }
	  },
      created(){
	  eventBus.$on('limitWasEdited',(limit)=>{
	      this.temp_limit = limit;
	  });
	  
	  eventBus.$on('riskEdit',(risk)=>{
	      this.temp_risk = risk;
	  });
      }
	  
  }
</script>

<style>
</style>

