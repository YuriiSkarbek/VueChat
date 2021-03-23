import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ContactUser from "../components/contacts/ContactList"
import ContactUserInfo from "../components/contacts/ContactUserInfo"
import UserList from "../components/users/UsersList"
import UserChat from "../components/users/chat/UserChat"

const routes = [
  {
    path: '/',
    name: 'home',
    component: ContactUser
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUserInfo
  },
  {
    path: '/chats',
    name: 'chats',
    component: UserList
  },
  {
    path: '/chat',
    name: 'chat',
    component: UserChat,
    props: true
  }
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
