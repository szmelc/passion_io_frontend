<template>
  <div class="main container">
    <div class="nav row">
      <a class="logout-link" href="#" @click="logout">Logout</a>
    </div>
    <div class="content-wrapper">
      <VerticalContainer v-for="vertical in verticals"
      :key="vertical.id"
      :id="vertical.id"
      :name="vertical.name"
      :categories="vertical.categories"
      />
    </div>
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
        .catch(() => this.logout())
    },

    assignVerticals (response) {
      this.verticals = response.data
    },

    logout () {
      delete localStorage.token
      this.$router.replace(this.$route.query.redirect || '/')
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content-wrapper {
  padding-top: 40px;
  display: flex;
  justify-content: center;
}

.logout-link {
  top: 5px;
  right: 50px;
  position: absolute;
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
