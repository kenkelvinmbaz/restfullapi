import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';// i just installed my bootstrap 4 right here
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(faUserSecret)


Vue.use(VueSweetalert2);
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
