<template>
  <div class="course__name-container">
    <div class="course__details-container">
      <span class="course__name">{{name}}</span>
      <span class="course__author">({{author_name}})</span>
    </div>
    <a class="course__delete-course-link" href="#" @click="deleteCourse">Delete</a>
  </div>
</template>

<script>
export default {
  name: 'Course',
  props: ['id', 'name', 'author_name'],
  methods: {
    deleteCourse () {
      this.$http.delete(`/courses/${this.id}`)
        .then((res) => this.removeCourse(res))
        .catch((res) => this.displayError(res))
    },

    removeCourse () {
      this.$parent.$emit('RemoveCourse')
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
  .course__name-container {
    display: flex;
    justify-content: space-between;
  }

  .course__details-container {
    margin-bottom: 10px;
  }

  .course__name {
    display: block;
  }

  .course__author {
    font-style: italic;
    font-size: 0.8em;
  }

  .course__delete-course-link {
    font-size: 0.8em;
  }
</style>
