<template>
  <div>
    <table class="table table-striped table-hover table-bordered table-sm ">
      <thead>
	<tr v-if="lang === 'en'">
	  <th scope="col">#</th>
	  <th scope="col">{{list_lang_pack.title_one_en}}</th>
	  <th scope="col">{{list_lang_pack.title_two_en}}</th>
	</tr>
	<tr v-else>
	  <th scope="col">#</th>
	  <th scope="col">{{list_lang_pack.title_one_tr}}</th>
	  <th scope="col">{{list_lang_pack.title_two_tr}}</th>
	</tr>
      </thead>
      <tbody>
	<tr v-for="(day,index) in dayList" :key="index">
	  <th scope="row">{{day.number}}</th>
	  <td>{{day.preLimit }}</td>
	  <td>{{day.endOfDay}}</td>
	</tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  
  export default{
      props:["risk","limit", "days","lang","list_lang_pack"],
      data(){
	  return{
	      temp_risk: this.risk,
	      temp_limit: this.limit,
	      temp_days: this.days,
	      }
      },
      computed: {
	  dayList : function(){
	      let result = []
	      let limit = this.temp_limit;
	      let postLimit;
	      let preLimit;
	      for(let i=0; i<this.temp_days; i++){
		  postLimit = limit - ((limit / 100) * this.temp_risk);
		  preLimit = limit;
		  limit = Math.floor(postLimit);
		  result.push({
		      number:i+1,
		      endOfDay:limit,
		      preLimit
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

