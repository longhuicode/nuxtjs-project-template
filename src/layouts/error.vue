<template>
  <div class="layout-error">
    <h1 v-if="error.statusCode === 404">
      {{ PageNotFound }}
    </h1>
    <h1 v-else>
      {{ OtherError }}
    </h1>
    <NuxtLink
      class="layout-error__home-page"
      to="/"
    >
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
@import 'src/assets/variables';

.layout-error {
  margin-top: 40px;
  text-align: center;
  color: $primary-font-color
}

h1 {
  font-size: 20px;
}

.layout-error__home-page {
  margin-top: 20px;
  display: inline-flex;
  text-decoration: underline;
  font-size: 18px;
}
</style>
