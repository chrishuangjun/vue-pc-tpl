<template>
  <div id="app">
    <i class="iconfont icon-bear"></i>
    <router-view/>
  </div>
</template>

<script>
// import vars from './assets/css/var.scss';
export default {
  name: 'App',
  created() {
    console.log(this.$vars.red);
  },
};
</script>

<style scoped lang="scss">
// @import "assets/css/var.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
