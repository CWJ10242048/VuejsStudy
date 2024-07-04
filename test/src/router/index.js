import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';
import OptionOne from '../components/OptionOne.vue';
import OptionTwo from '../components/OptionTwo.vue';
import OptionThree from '../components/OptionThree.vue';
import OptionFour from '../components/OptionFour.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/optionOne',
    name: 'OptionOne',
    component: OptionOne
  },
  {
    path: '/optionTwo',
    name: 'OptionTwo',
    component: OptionTwo
  },
  {
    path: '/optionThree',
    name: 'OptionThree',
    component: OptionThree
  },
  {
    path: '/optionFour',
    name: 'OptionFour',
    component: OptionFour
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
