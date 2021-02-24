import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
    methods:{
	
	changeLimit(limit){
	    this.$emit('limitWasEdited',limit);
	},
	changeRisk(risk){
	    this.$emit('riskEdit',risk);
	},
	changeDaysLimits(days){
	    this.$emit('daysLimitEdited',days);
	},
	changeLang(lang){
	    this.$emit('langWasEdited',lang);
	}
    }
});



new Vue({
  render: h => h(App),
}).$mount('#app')
