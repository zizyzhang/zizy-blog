import Vue from 'vue'
import Router from 'vue-router'
import Diary from '@/components/Diary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Diary',
      component: Diary
    }
  ]
})
