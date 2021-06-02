import { createRouter, createWebHistory } from "vue-router";

import Signup from '@/pages/Signup.vue'
import Signin from '@/pages/Signin.vue'
import Landing from '@/pages/Landing.vue'
import Chatting from '@/pages/Chatting.vue'

const routes = [
  {
    path: '/',
    redirect: '/chatting'
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  }, 
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  }, 
  {
    path: "/landing",
    name: "Landing",
    component: Landing
  },
  {
    path: "/chatting",
    name: "Chatting",
    component: Chatting
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;