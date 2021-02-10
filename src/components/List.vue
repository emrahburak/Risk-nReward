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
	<tr v-for="(number,index) in listLimit" :key="index">
	  <th scope="row">{{number}}</th>
	  <td>Mark</td>
	  <td>Otto</td>
	  <td>@mdo</td>
	</tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
      data(){
	  return{
	      listLimit: 10
	      }
	  }
  }
</script>

<style>
</style>
