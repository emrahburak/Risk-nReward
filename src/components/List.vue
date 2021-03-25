<template>
  <div>
      <p> {{ getCurrentDate.month}} - {{ getCurrentDate.year}}</p>
    <table class="table table-striped table-hover table-bordered table-sm ">
      <thead>
	<tr v-if="getSelectedLang === 'en'">
	  <th scope="col">#</th>
	  <th scope="col">{{getListLang.title_first_en}}</th>
	  <th scope="col">{{getListLang.title_second_en}}</th>
	</tr>
	<tr v-else>
	  <th scope="col">#</th>
	  <th scope="col">{{getListLang.title_first_tr}}</th>
	  <th scope="col">{{getListLang.title_second_tr}}</th>
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
  import {mapGetters} from 'vuex'
  export default{
      computed: {
	  ...mapGetters([
	      "getListLang",
	      "getSelectedLang",
	      "getLimit",
	      "getRisk",
	      "getMonths",
	      ]),
	  getCurrentDate: function(){
	      let now = new Date();
	      return {
		  month: this.getMonths[this.getSelectedLang][now.getMonth()],
		  year: now.getUTCFullYear()
	      }

	      },
	  getDaysOfMonth: function(){
	      let now = new Date();
	      return new Date(now.getUTCFullYear(), now.getUTCMonth()+1 ,0).getDate();

	      },
	  dayList : function(){
	      let result = []
	      let limit = this.getLimit;
	      let postLimit;
	      let preLimit;
	      for(let i=0; i<this.getDaysOfMonth; i++){
		  postLimit = limit - ((limit / 100) * this.getRisk);
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
      }
  }
</script>

<style>
</style>

