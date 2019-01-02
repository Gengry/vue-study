<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 编程式导航 -->
    {{ food }}
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // },
  props: {
    food: {
      type: String,
      default: '苹果'
    }
  },
  // 组件内守卫
  beforeRouteEnter: (to, from, next) => {
    // 这个方法执行时页面还没有渲染, 在这里使用this是获取不到组件实例的
    // 如果想在这个方法中使用组件的实例 可以这样写 这个vm就是这个组件的实例
    next(vm => {
      console.log(vm)
    })
    // console.log(to.name)
    // next()
  },
  beforeRouteLeave: (to,from,next) => {
    // 离开页面的时候调用  ,提醒未保存
    const leave = confirm('您确认要离开吗? ')
    if (leave) next()
    else next(false)
  },
  methods: {
    handleClick (type) {
      // 编程式导航需要用到路由实例
      // 获取路由实例: this.$router 就是在main.js中注册的路由实例
      // this.$router.go(-1)
      // this.$router.back()
      if (type === 'back') this.$router.back()
      else if (type === 'push') this.$router.push('/parent')
      else if (type === 'replace') this.$router.replace('/parent')
    }
  }
}
</script>
