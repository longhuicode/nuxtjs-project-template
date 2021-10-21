import { Context } from '@nuxt/types'
import createPersistedState from 'vuex-persistedstate'
import config from '~/constant/config'
import { COMMON_KEYS } from '~/store/common'

export default ({ store }: Context) => {
  createPersistedState({
    key: config.appNmae,
    paths: [
      // COMMON_KEYS.namespace,
    ]
  })(store)
}
