import vue from 'vue'
import loadingComponent from '../components/loading.vue'

const ToastConstructor = vue.extend(loadingComponent)

function showToast (text, duration = 2000) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        text: text,
        showWrap: true,    // 是否显示组件
        showContent: true  // 作用:在隐藏组件之前,显示隐藏动画
      }
    }
  })
  document.body.appendChild(toastDom.$el)

  setTimeout(() => { toastDom.showContent = false }, duration - 1250)
  setTimeout(() => { toastDom.showWrap = false }, duration)
}

function registryToast () {
  vue.prototype.$toast = showToast
}

export default registryToast
