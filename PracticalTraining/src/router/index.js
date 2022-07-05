import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Show from '@/components/show'
import Test from '@/components/test'
import Hello from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login

    },
    {
      path: '/show',
      name: 'show',
      component: Show,
      beforeEnter:(to,from,next) => {
        if(from.name == 'login'){
          console.log(from.cookie)
          next()
        }
      },
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }

  ]
})
