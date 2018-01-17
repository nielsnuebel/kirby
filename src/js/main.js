// Main JS File
import cq from 'cq-prolyfill' // eslint-disable-line
// import Vue from 'vue'
// import { sync } from 'vuex-router-sync'
// import router from './router'
// import store from './store'
import './partial/contentBuilder'
import lazySizes from 'lazysizes'
import lazybgset from 'lazysizes/plugins/bgset/ls.bgset' // eslint-disable-line
import 'babel-polyfill'
import 'svgxuse' // eslint-disable-line
import './partial/kittnad' // Small Advertising for Kittn :)
import './partial/modernizer-loader'
import './partial/detect-browser'
import './partial/disable-pointerevents'
// import App from './app'

// keep vue-router and vuex store in sync
// sync(store, router)
// Vue App
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: (h) => h(App)
// })

// Lasysizes Lazyload Config
const lazySizesConfig = window.lazySizesConfig || {}
window.lazySizesConfig = lazySizesConfig
window.lazySizesConfig.expand = 130
lazySizesConfig.expFactor = 1.3

// Lazy Sizes Init
lazySizes.init()

// Activate Container Queries
cq({ postcss: true })
