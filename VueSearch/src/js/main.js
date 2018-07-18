import '../css/style.css';
import Vue from 'vue';

Vue.component('search-item', {
	template:''
});
new Vue({
	el: '#search',
	data: {
		searchName: '',
		selected: 'baidu',
		options: [
			{ text:'百度', value:'baidu' },
			{ text:'谷歌', value:'google' },
		]
	},
	methods: {
		goSearch: function(){
			if(this.selected === 'baidu')
				location.href="https://www.baidu.com/s?wd="+this.searchName;
			if(this.selected === 'google')
				location.href="https://www.google.com/search?q="+this.searchName;
		}
	}
});