<template>
  <div >
        <h1>用户列表</h1>  
        <ul>  
          <!-- 使用v-for遍历users数组，并显示每个用户的name -->  
          <li v-for="user in users" :key="user.name">  
            {{user.name}} - {{user.age}}  
          </li>  
        </ul>  
  </div>
</template>

<script>
const users = [];  
export default {
  name: 'HelloWorld',
  created() {  
    this.getUserList();  
  }, 
  data() {  
      return {  
        // 假设我们从API获取的是一个用户列表  
        users
      };  
  }, 
  methods: {  
	getUserList() {
    this.$http.get('/').then(response => {  
          console.log(response.data)
          this.users = response.data; 
      })  
      .catch(error => {  
          console.log(error)  
      });  
  } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
