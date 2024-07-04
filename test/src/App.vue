<template>
  <div id="app">
    <el-container v-if="isLoggedIn" class="layout-container-demo" style="height: 100vh;">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Message /></el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">
                  <router-link to="/optionOne">Option 1</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/optionTwo">Option 2</router-link>
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">
                  <router-link to="/optionThree">Option 3</router-link>
                </el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">
                  <router-link to="/optionFour">Option 4-1</router-link>
                </el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Menu /></el-icon>Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Setting /></el-icon>Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px">
                <setting />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="logout">Logout</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>

        <el-main>
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>

    <user-login v-else @login-success="handleLoginSuccess" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import UserLogin from './components/UserLogin.vue';

export default {
  name: 'App',
  components: {
    UserLogin
  },
  setup() {
    const isLoggedIn = ref(false);

    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      if (token && localStorage.getItem('isLoggedIn') === 'true') {
        isLoggedIn.value = true;
      } else {
        localStorage.setItem('isLoggedIn', 'false');
      }
    };

    const handleLoginSuccess = () => {
      isLoggedIn.value = true;
      localStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
      isLoggedIn.value = false;
      localStorage.removeItem('token');
      localStorage.setItem('isLoggedIn', 'false');
    };

    onMounted(() => {
      checkLoginStatus();
    });

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('isLoggedIn', 'false');
    });

    return {
      isLoggedIn,
      handleLoginSuccess,
      logout
    };
  }
};
</script>

<style>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
#app {
  height: 100vh;
}
</style>
