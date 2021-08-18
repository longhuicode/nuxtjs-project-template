<template>
  <div class="content-header">
    <span class="content-header__title">{{ title }}</span>
    <Iconfont
      v-if="closeButton"
      class="content-header__close"
      name="close"
      size="36"
      color="#A0A1AB"
      @click="onClose"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Iconfont from '~/components/icon/Iconfont.vue'

export default Vue.extend({
  name: 'ContentHeader',
  components: {
    Iconfont
  },
  props: {
    title: {
      type: String,
      required: true
    },
    closeButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClose () {
      this.$emit('close', false)
    }
  }
})
</script>

<style lang="scss">
@import 'src/assets/variables';

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  padding: 0 15px 0 24px;
}

.content-header__title {
  width: 84%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 600;
  color: $primary-font-color;
  text-align: left;
}

.content-header__close {
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: $normal-color;
  }
}
</style>
