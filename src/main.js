import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const eventHub = new Vue();

// 引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 加载loading
import tools from './libs/loading.js'
Vue.prototype.tool = tools

// 自定义loading加载
import loading from './libs/loadings.js' // 引入loading
Vue.use(loading) // 全局使用loading

// 省市区选择器-联动
import VueAreaLinkage from 'vue-area-linkage'
import 'vue-area-linkage/dist/index.css'
Vue.use(VueAreaLinkage)

// 刻度尺
import CsRuler from 'cs-ruler'
Vue.use(CsRuler)

// 引入flexible
import 'lib-flexible'

Vue.config.productionTip = false

new Vue({
  data: { eventHub },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
