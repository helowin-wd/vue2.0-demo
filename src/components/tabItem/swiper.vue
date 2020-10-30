<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in swiperList"
          :key="index"
        >
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *  https://swiperjs.com/get-started/
 *  获取swiper的js文件和css文件
 * */
import Swiper from '@/assets/js/swiper-bundle.min.js';
import '@/assets/css/swiper-bundle.min.css';

// 引入tabItem组件
import one from '@/components/tabItem/one';
import two from '@/components/tabItem/two';
import three from '@/components/tabItem/three';
import four from '@/components/tabItem/four';
import five from '@/components/tabItem/five';

export default {
  name: 'Index',
  data () {
    return {
      swiperList: [
        { path: '/one', component: one },
        { path: '/two', component: two },
        { path: '/three', component: three },
        { path: '/four', component: four },
        { path: '/five', component: five }
      ]
    }
  },
  components: {
    one, two, three, four, five
  },
  methods: {

  },
  mounted () {
    /**
     *  设定初始化时slide的索引。
     *  Swiper默认初始化时显示第一个slide，有时想初始化时直接显示其他slide，可以做此设置
     */
    var mySwiper = new Swiper('.swiper-container', {
      initialSlice: this.$route.path === '/one' ? 0 : this.$route.path === '/two' ? 1 : this.$route.path === '/three' ? 2 : this.$route.path === 'four' ? 3 : this.$route.path === '/five' ? 4 : 0
    });

    // 监控滑动后当前页面的索引，将索引发射到导航组件
    mySwiper.on('slideChange', () => {
      // 左右滑动时将当前slide的索引发送到nav组件
      this.$root.eventHub.$emit('slideTab', mySwiper.activeIndex);
    })

    // 接收nav组件传过来的导航按钮索引值，跳转到相应的内容区
    this.$root.eventHub.$on('changeTab', (index) => {
      mySwiper.slideTo(index, 0, false)
    })

  }
}
</script>

<style lang='less' scoped>
</style>

