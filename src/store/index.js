import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({

    state:{
	headerLang:{
	    title_en:'Risk/Reward Ratio & Capital',
	    title_tr:'Risk/Getiri Oranı & Sermaye',
	},
	limitLang:{
	    title_en: 'Capital',
	    title_tr: 'Sermaye',
	    summary_en: 'Summary',
	    summary_tr: 'Açıklama',
	},
	riskLang:{
	    title_en: 'Daily Risk Ratio',
	    summary_en: 'Summary',
	    title_tr: 'Günlük Risk Oranı',
	    summary_tr: 'Açıklama',
	},
	listLang:{
	    title_first_en: 'Capital',
	    title_second_en: 'End Of The Day',
	    title_first_tr: 'Sermaye',
	    title_second_tr: 'Gün Sonu'
	}
    },
    getters:{
	getHeaderLang(state){
	    return{...state.headerLang}
	},
	getLimitLang(state){
	    return{...state.limitLang}
	},
	getRiskLang(state){
	    return{...state.riskLang}
	},
	getListLang(state){
	    return{...state.listLang}
	},
    }
})


export default store;
