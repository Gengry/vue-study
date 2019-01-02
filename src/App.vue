<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- router-link 封装了一个a标签 -->
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <!-- 视图渲染组件 -->
    <!-- 通过router-link加载的都会在router-view中渲染 -->

    <!-- 命名视图,同一个页面显示多个视图,不同的视图显示在不同位置 -->
    <router-view name="email" />
    <router-view name="tel" />
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
