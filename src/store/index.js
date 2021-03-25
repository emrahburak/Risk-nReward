import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({

    state:{

	langs:["en","tr"],
	selected_lang: 'en',
	risk_ratio: '3',
	limit_value: 1000,

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
	},
	months:{
	    en: ["January","February","March",
		 "April","May","June","July",
		 "August","September","October",
		 "November","December"],
	    tr:["Ocak","Şubat","Mart",
		"Nisan","Mayıs","Haziran",
		"Temmuz","Ağustos","Eylül",
		"Ekim","Kasım","Aralık"
		]
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
	getLangOption(state){
	    return state.langs;
	},
	getSelectedLang(state){
	    return state.selected_lang;
	},
	getRisk(state){
	    return state.risk_ratio;
	},
	getLimit(state){
	    return state.limit_value;
	},
	getMonths(state){
	    return {...state.months}
	}
    },
    mutations:{
	setLangOption(state,payload){
	    state.selected_lang = payload;
	},
	setRisk(state,payload){
	    state.risk_ratio = payload;
	},
	setLimit(state,payload){
	    state.limit_value = payload;
	}

    }
})


export default store;

