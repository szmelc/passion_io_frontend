<template>
  <div id="app">
    <div class="container col-xs-12">
      <router-view></router-view>
    </div>
    <footer>
      <span>Passion.io Recruitment Task | Łukasz Szmelc</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  .container {
    margin: 0;
    max-width: 100%;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    vertical-align: center;
    background-color: #48A3EA;
    color: white;
    padding: 3px 0;
  }

  span {
    margin: 0;
    font-size: 0.9em;
  }
</style>
