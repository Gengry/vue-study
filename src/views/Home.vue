<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 编程式导航 -->
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
