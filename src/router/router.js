import Home from '@/views/Home.vue'

export default [
  {
    //  一个基本的路由对象必须包含两个属性：path，component
    path: '/',
    // 命名路由 在<router-link v-bind:to="{ name: 'home' }" >
    name: 'home',
    // 指定别名
    alias: '/home_page',
    //  组件
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //  这样写起到了懒加载的作用，只有访问到这个页面的时候才去加载这个组件
    //  这是一个ES6的箭头函数
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 动态路由
    path: '/argu/:name',
    component: () => import(/* test */ '@/views/argu.vue')
  },
  {
    // 嵌套路由
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    // 命名视图
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    // 重定向
    path: '/main',
    // redirect: '/'
    // 命名路由的方式
    // redirect: { name: 'Home'}
    // 方法函数
    redirect: to => {
      // console.log(to)
      // 实现一些逻辑 通过参数做不同的判断
      // return {
      //   name: 'home'
      // }
      return '/'
    }

    // ES6 如果只有一个return可以简写
    // redirect: to => '/'
  }
]
