<template>
  <div class="courses">
    <Course v-for="course in courses"
    :key="course.id"
    :name="course.name"
    />
  <span v-if="courses.length == 0">No courses...</span>
  <input @keyup.enter="addCourse" v-model="newCourse" placeholder="add course..." class="courses__add-course-input">
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
      debugger
      this.$http.post('/courses', { category_id: this.category_id, state: 1, name: this.newCourse })
        .then(res => this.fetchCourses())
        .catch(req => alert('Something went wrong'))
      document.querySelector('.courses__add-course-input').value = ''
    }
  }
}
</script>

<style>

</style>
