<template>
  <div id="app">
    <div class="container col-xs-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .container {
    margin: 0;
    max-width: 100%;
  }
</style>
