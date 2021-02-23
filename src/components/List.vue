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
	<tr v-for="(day,index) in dayList" :key="index">
	  <th scope="row">{{day.number}}</th>
	  <td>{{ }}</td>
	  <td>{{day.limit}}</td>
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
	      end_of_day:0,
	      }
      },
      computed: {
	  dayList : function(){
	      let result = []
	      let limit = this.temp_limit;
	      let newLimit;
	      for(let i=1; i<this.temp_days; i++){
		  newLimit = limit - ((limit / 100) * this.temp_risk);
		  limit = Math.floor(newLimit);
		  result.push({
		      number:i,
		      limit
		  });
		  }
	      return result;
	      }

	  },
      created(){
	  eventBus.$on('limitWasEdited',(limit)=>{
	      this.temp_limit = limit;
	  });
	  
	  eventBus.$on('riskEdit',(risk)=>{
	      this.temp_risk = risk;

	  });
	  eventBus.$on('daysLimitEdited',(days)=>{
	      this.temp_days = days;
	      });
	      
      }
	  
  }
</script>

<style>
</style>

