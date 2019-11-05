<template>
  <div class="category__name-container">
    <span class="category__name" @click="toggleCourses">{{name}}</span>
    <a href="#" class="category__delete-category-link" @click="deleteCategory">Delete</a>
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
    },

    deleteCategory () {
      this.$http.delete(`/categories/${this.id}`)
        .then((res) => this.removeCategory(res))
        .catch((res) => this.displayError(res))
    },

    removeCategory () {
      this.$parent.$emit('RemoveCategory')
    },

    displayError (response) {
      for (var error in response['response']['data']['errors']) {
        if (response['response']['data']['errors'].hasOwnProperty(error)) {
          alert(error + ' ' + response['response']['data']['errors'][error])
        }
      }
    }
  }
}
</script>

<style>
  .category__name-container {
    margin-bottom: 10px;
  }

  .category__name {
    cursor: pointer;
    font-size: 1.5em;
    position: relative;
  }

  .category__delete-category-link {
    float: right;
  }

  .category__name::after {
    top: 15%;
    margin-left: 6px;
    content: '';
    width: 20px;
    background: url('/static/arrow.png');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    height: 20px;
    /* background: red; */
    position: absolute;
  }

  .category__name:hover {
    text-decoration: underline;
  }
</style>
