import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
new Vue({
  render: h => h(App)
}).$mount('#app')
