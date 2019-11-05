<template>
  <div class="category__name-container">
    <span class="category__name" @click="toggleCourses">{{name}}</span>
    <Courses v-if=showCourses
    :key="this.id"
    :category_id="this.id"
    />
  </div>
</template>

<script>
import Courses from './Courses'

export default {
  name: 'CategoryContainer',
  components: {
    Courses
  },
  props: ['id', 'name'],
  data () {
    return {
      showCourses: false
    }
  },

  methods: {
    toggleCourses () {
      this.showCourses = !this.showCourses
    }
  }
}
</script>

<style>
  .category__name {
    cursor: pointer;
    font-size: 1.5em;
  }
  .category__name:hover {
    text-decoration: underline;
  }
</style>
