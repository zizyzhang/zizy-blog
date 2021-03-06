import Vue from 'vue'
import Router from 'vue-router'
import Diary from '@/components/Diary'
import About from '@/components/About'
import Home from '@/components/Home'
import Post from "@/components/Post";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/diary',
      name: 'diary',
      component: Diary
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/post',
      name:'post',
      component:Post
    }
  ]
})
