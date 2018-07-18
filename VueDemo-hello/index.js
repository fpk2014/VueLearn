import Vue from 'vue';
import hello from './vue/hello.vue'

console.log("hello is");
console.log(hello);

new Vue({
	el: '#app',
	render: h => h(hello)
})