<template>
  <div class="debug">
    <div class="debug__item">
      page origin: <span class="debug__value">{{ origin }}</span>
    </div>
    <div class="debug__item">
      isMobile: <span class="debug__value">{{ isMobile }}</span>
    </div>
    <div class="debug__item">
      isMobileDevices: <span class="debug__value">{{ isMobileDevices }}</span>
    </div>
    <div class="debug__item">
      userAgent: <span class="debug__value">{{ userAgent }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { isMobile, isMobileDevices, loadScript } from '~/modules/tools'

export default Vue.extend({
  name: 'Debug',
  layout: 'empty',
  data () {
    return {
    }
  },
  computed: {
    isMobile,
    isMobileDevices,
    userAgent (): string {
      return window.navigator.userAgent
    },
    origin (): string {
      return window.location.origin
    }
  },
  beforeMount () {
    loadScript('//cdn.jsdelivr.net/npm/eruda', 'eruda').then(() => {
      window.eruda.init()
    })
  }
})
</script>

<style lang="scss" scoped>
@import 'src/assets/variables';

.debug {
  flex: 1;
  padding: 12px 12px 0 12px;
  word-break: break-all;
}

.debug__item {
  margin-bottom: 12px;
}

.debug__value {
  color: $error-color
}
</style>
