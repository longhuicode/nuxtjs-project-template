import { GetterTree, ActionTree, MutationTree } from 'vuex'
import cookie from 'js-cookie'
import { augmentKeys } from '~/modules/tools'
import { matchLanguage } from '~/plugins/i18n'
import { LANGUAGE, LanguageOptions } from '~/constant/language'

const keys = {
  namespace: 'common',
  // mutations
  setLanguage: 'setLanguage',
  // actions
  // getters
  computedLanguage: 'computedLanguage'
}

export const state = () => ({
  version: '0.0.1',
  language: ''
})

export type CommonState = ReturnType<typeof state>

export const mutations: MutationTree<CommonState> = {

}

export const actions: ActionTree<CommonState, CommonState> = {

}

export const getters: GetterTree<CommonState, CommonState> = {
  [keys.computedLanguage] (state) {
    const ua = window.navigator.userAgent.match(/Language\/([a-zA-Z-_]+)/)
    const query = window.location.search.match(/[&?]lang=([a-zA-Z-_]+)/)
    const uaLanguage = ua?.[1]
    const queryLanguage = query?.[1]

    return matchLanguage(
      localStorage.getItem('lang') || cookie.get('lang') || state.language || queryLanguage || uaLanguage || window.navigator.language,
      LanguageOptions,
      LANGUAGE.en
    )
  }
}

export const COMMON_KEYS = augmentKeys(keys, keys.namespace)
