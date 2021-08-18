<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      {{ PageNotFound }}
    </h1>
    <h1 v-else>
      {{ OtherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const PageNotFound = '404 Not Found'
const OtherError = 'An error occurred'

export default Vue.extend({
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      PageNotFound,
      OtherError
    }
  },
  head () {
    const title = this.error.statusCode === 404 ? PageNotFound : OtherError
    return {
      title
    }
  }
})
</script>

<style lang="scss">
h1 {
  font-size: 20px;
}
</style>
