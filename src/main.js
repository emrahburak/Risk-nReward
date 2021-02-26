import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


export const langPack = new Vue({
    data:{
	test:"test",
	header_lang_pack:{
	    title_tr:"Risk/Getiri Oranı & Sermaye",
	    title_en: "Risk/Reward Ratio & Capital"
	},
	limit_lang_pack:{
	    title_en:"Capital",
	    summary_en:"Summary",
	    title_tr:"Sermaye",
	    summary_tr:"Açıklama",

	},
	risk_lang_pack:{
	    title_en: "Daily Risk Ratio",
	    summary_en:"Summary",
	    title_tr:"Günlük Risk Oranı",
	    summary_tr:"Açıklama",
	},
	list_lang_pack:{
	    title_one_en:"Capital",
	    title_two_en:"End Of The Day",
	    title_one_tr:"Sermaye",
	    title_two_tr:"Gün Sonu",

	}

    }

})

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
	    console.log('lang edit',lang);
	    this.$emit('langWasEdited',lang);
	}
    }
});



new Vue({
  render: h => h(App),
}).$mount('#app')
