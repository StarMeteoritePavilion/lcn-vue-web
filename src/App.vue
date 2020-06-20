<template>
  <div id="app">
    <div id="page">{{2000010 | amountFormatter}}   </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
    }


  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#page {
  heigth: 60px;
  margin: 10px;
  font-size: 40px;
}
</style>
