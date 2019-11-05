<template>
  <div class="main">
    <VerticalContainer v-for="vertical in verticals"
    :key="vertical.id"
    :id="vertical.id"
    :name="vertical.name"
    />
  </div>
</template>

<script>
import VerticalContainer from './VerticalContainer'

export default {
  name: 'Homepage',
  components: {
    VerticalContainer
  },
  data () {
    return {
      verticals: null
    }
  },
  mounted () {
    this.fetchVerticals()
  },
  methods: {
    fetchVerticals () {
      this.$http.get('/verticals')
        .then(response => this.assignVerticals(response))
    },

    assignVerticals (response) {
      this.verticals = response.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  justify-content: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
