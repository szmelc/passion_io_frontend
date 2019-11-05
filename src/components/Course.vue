<template>
  <span class="course__name">{{name}}</span>
</template>

<script>
export default {
  name: 'Course',
  props: ['name']
}
</script>

<style>
  .course__name {
    margin-bottom: 10px;
    display: block;
  }
</style>
