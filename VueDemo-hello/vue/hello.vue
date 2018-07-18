<template>
<div  id="app">
	<h1>{{ message }}</h1>
</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data(){
		return {
			message: "Hello Vue"
		};
	},
}
</script>
<style>
h1 {
	color:red;
}
</style>