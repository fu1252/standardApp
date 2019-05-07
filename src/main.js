import Vue from 'vue'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$store=store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
      
}