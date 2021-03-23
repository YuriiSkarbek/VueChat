<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <Wrapper/>
  </div>
</template>

<script>
import Wrapper from "./components/Wrapper"

export default {
  name: 'VueChat',
  components: {
    Wrapper
  }
}
</script>

<style>

</style>
