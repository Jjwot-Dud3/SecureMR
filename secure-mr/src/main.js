import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common['Authorization'] = "Bearer" + localStorage.getItem('token');

Vue.config.productionTip = false

// check if token is in localstorage
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    if(localStorage.get('accessToken')){
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

