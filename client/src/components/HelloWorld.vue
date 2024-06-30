<template>
  <p>{{data.name}}</p>
</template>

<script>
import { reactive } from "vue"
export default{
	name:"HelloWorld",
	setup() {
		const data = reactive({
			name:"CWJ",
			age:18
		})
		return{
			data
		}
	}
}
</script>