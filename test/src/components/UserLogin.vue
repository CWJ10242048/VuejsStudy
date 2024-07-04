<template>
  <div class="user-login">
    <el-form :model="loginForm" @submit.prevent="handleLogin">
      <el-form-item label="Username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await this.$http.post('http://localhost:3000/login', this.loginForm);
        if (response.data.status === 200) {
          localStorage.setItem('token', response.data.token); // 假设服务器返回一个 token
          this.$emit('login-success');
          this.$router.push({ name: 'OptionOne' });
        } else {
          this.$message.error(response.data.message);
        }
      } catch (error) {
        this.$message.error('Login failed');
      }
    }
  }
}
</script>

<style scoped>
.user-login {
  max-width: 300px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
