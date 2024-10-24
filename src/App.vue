<template>
<HeaderMain />
  <router-view/>
</template>

<script>
import HeaderMain from './components/HeaderMain'
export default{
  components:{
    HeaderMain
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}


</style>
