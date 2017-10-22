import Vue from 'vue'
import Router from 'vue-router'
import Diary from '@/components/Diary'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Diary',
      component: Diary
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
