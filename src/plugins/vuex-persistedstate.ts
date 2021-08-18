import { Context } from '@nuxt/types'
import createPersistedState from 'vuex-persistedstate'
import { appNmae } from '../../config'
import { COMMON_KEYS } from '~/store/common'

export default ({ store }: Context) => {
  createPersistedState({
    key: appNmae,
    paths: [
      // COMMON_KEYS.namespace,
    ]
  })(store)
}
