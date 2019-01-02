import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

// export default new Router({
//   // 默认是hash模式,就是页面url 中使用#,在#后面做路由变化页面是不会刷新的,使用这种模式模拟页面跳转
//   // mode: 'hash',
//   // 使用history的api做无刷新的页面的页面跳转,history需要后端的支持
//   // localhost:8080/ddss(会报404) 在后端配置当没有匹配到静态资源的时候都返回index.html
//   // 如果匹配不到路由会报错,所以需要下router中的最后配置一个* 显示404组件
//   mode: 'history',
//   //  routes: routes
//   //  ES6 简写方式
//   routes
// })



const router = new Router({
  routes
})

const HAS_LOGING = true

// 导航守卫
// eg:判断登录状态,如果已经登录了跳转到首页,如果没有登录跳转到登录页面
// eg:做权限控制,如果没有权限做相应的处理
// 全局前置守卫
// to,from都是路由对象
// to为即将跳转的路由对象
// from为将要离开的路由对象
// next是一个函数
router.beforeEach((to,from,next) => {
  if(to.name !== 'login'){
    if(HAS_LOGING) next()
    else next({ name: 'login' })
  }else{
    if(HAS_LOGING) next('/home')
    else next()
  }
})

// 全局守卫 导航被确认之前(所有导航钩子都结束),所有组件内守卫,异步路由组件解析之后 触发
// router.beforeResolve((to,from,next) => {
// })
// 路由独享守卫在路由列表中配置
// 组件内守卫,在组件中配置 home.vue

// 后置钩子 在所有页面跳转后添加操作
router.afterEach((to,from) => {
  //loging = false
})

/**
 * 1.导航被触发
 *
 */

export default router
