<template>
  <div class="courses">
    <Course v-for="course in courses"
    :key="course.id"
    :id="course.id"
    :name="course.name"
    :author_id="course.author_id"
    />
  <span v-if="courses.length == 0">No courses...</span>
  <input @keyup.enter="addCourse" v-model="newCourse" placeholder="add course..." class="courses__add-course-input">
  <hr>
  </div>
</template>

<script>
import Course from './Course'

export default {
  name: 'Courses',
  components: {
    Course
  },
  props: ['id', 'category_id'],
  data () {
    return {
      courses: null,
      newCourse: null
    }
  },
  created () {
    this.fetchCourses()
    this.$on('RemoveCourse', () => {
      this.fetchCourses()
    })
  },
  methods: {
    fetchCourses () {
      this.$http.get('/courses', { params: { category_id: this.category_id } })
        .then(res => this.assignCourses(res))
        .catch(res => console.log(res))
    },

    assignCourses (response) {
      this.courses = response.data
      console.log(this.courses)
    },

    addCourse () {
      this.$http.post('/courses', { category_id: this.category_id, state: 1, name: this.newCourse })
        .then(res => this.fetchCourses())
        .catch(res => this.displayError(res))
      document.querySelector('.courses__add-course-input').value = ''
    },

    displayError (response) {
      for (var error in response['response']['data']['errors']) {
        if (response['response']['data']['errors'].hasOwnProperty(error)) {
          alert(error + ' ' + response['response']['data']['errors'][error]);
        }
      }
    }
  }
}
</script>

<style>
  .courses__add-course-input {
    width: 100%;
    border: none;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 2px;
  }
</style>
