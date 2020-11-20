import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import en from '../i18n/vuetify/en.ts'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: {
          base: colors.red.base,
          darken1: colors.red.darken1,
          darken2: colors.red.darken2,
          darken3: colors.red.darken3,
          darken4: colors.red.darken4,
          lighten1: colors.red.lighten1,
          lighten2: colors.red.lighten2,
          lighten3: colors.red.lighten3,
          lighten4: colors.red.lighten4
        },
        anchor: colors.shades.white,
        secondary: '#424242',
        accent: '#2196f3',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: '#ee445b'
      }
    }
  },
  lang: {
    locales: { en },
    current: 'en'
  }
})
