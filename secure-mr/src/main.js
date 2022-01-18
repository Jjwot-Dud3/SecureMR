import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VuePdfApp from 'vue-pdf-app'

axios.defaults.baseURL = 'https://secure-mr-api.herokuapp.com';
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('accessToken');

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

//check if token is in localstorage
// router.beforeEach((to, from, next) => {
//   if(to.meta.requiresAuth) {
//     if(localStorage.getItem('accessToken')){
      
//       console.log(1);
      
//       axios.post('/accounts/checkToken',{accessToken: localStorage.getItem('accessToken')})
//         .then(response => {
//             localStorage.userName = response.data.data.userName;
//             localStorage.accessToken = response.data.data.accessToken;
//             localStorage.role = response.data.data.role;
//             next();
//         }).error(() => {
//             localStorage.clear();
//             next();
//           });
//     } else {
      
//       next();
//     }
//   } else {
//     next();
//   }
// });

Vue.component("vue-pdf-app", VuePdfApp);

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app');
