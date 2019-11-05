<template>
  <div class="vertical col-md-3">
    <div class="vertical__header-container row">
      <h2 class="vertical__header">
        {{name}}
      </h2>
    </div>
    <div class="vertical__categories-container">
      <CategoryContainer v-for="category in categories"
      :key="category.id"
      :id="category.id"
      :name="category.name"
      />
    </div>
    <input @keyup.enter="addCategory" v-model="newCategory" placeholder="add category..." class="vertical__add-category-input">
  </div>
</template>

<script>
import CategoryContainer from './CategoryContainer'

export default {
  name: 'VerticalContainer',
  components: {
    CategoryContainer
  },
  props: ['id', 'name'],
  data () {
    return {
      categories: null,
      newCategory: null
    }
  },
  beforeMount () {
    this.fetchCategories()
  },
  methods: {
    fetchCategories () {
      this.$http.get('/categories', { params: { vertical_id: this.id } })
        .then(res => this.assignCategories(res))
        .catch(req => console.log(req))
    },

    assignCategories (response) {
      this.categories = response.data
    },

    addCategory () {
      this.$http.post('/categories', { vertical_id: this.id, state: 1, name: this.newCategory })
        .then(res => this.fetchCategories())
        .catch(req => alert('Something went wrong'))
      document.querySelector('.vertical__add-category-input').value = ''
    }
  }
}
</script>

<style scoped>
  .vertical {
    margin: 0 30px;

  }
  .vertical__header-container {
    background: #48A3EA;
  }

  .vertical__header {
    color: white;
    margin: 7px auto;
  }

  .vertical__add-category-input {
    width: 100%;
    border: none;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 2px;
  }
</style>
