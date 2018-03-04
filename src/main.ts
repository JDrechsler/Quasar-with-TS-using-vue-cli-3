import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Quasar, * as All from 'quasar-framework/dist/quasar.mat.esm.js'
import 'quasar-extras/material-icons'

require('quasar-framework/dist/umd/quasar.mat.min.css')
require('quasar-extras/roboto-font')

Vue.use(Quasar, {
	components: All,
	directives: All
})

Vue.config.productionTip = false


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')



