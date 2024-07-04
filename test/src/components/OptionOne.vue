<template>
  <div>
    <h1>Option One</h1>
    <el-table :data="users">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="age" label="Age"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OptionOne',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await this.$http.get('http://localhost:3000/users');
        if (response.data.status === 200) {
          this.users = response.data.data;
        } else {
          this.$message.error('Failed to fetch users');
        }
      } catch (error) {
        this.$message.error('Failed to fetch users');
      }
    }
  }
}
</script>

<style scoped>
</style>
