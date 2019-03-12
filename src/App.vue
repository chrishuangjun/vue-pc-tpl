<template>
  <div id="app">
    <i class="iconfont icon-bear"></i>
    <spin></spin>
    <router-view/>
  </div>
</template>

<script>
// import vars from './assets/css/var.scss';
import { Spin } from 'mui'
export default {
  name: 'App',
  created () {
    console.log(this.$vars.red)
    // this.$Spin.show()
  },
  components: {
    spin: Spin
  }
}
</script>

<style scoped lang="scss">
// @import "assets/css/var.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon-bear {
  color: $red;
}
</style>
