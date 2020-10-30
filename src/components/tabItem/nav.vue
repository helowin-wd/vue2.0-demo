<template>
  <div class="nav">
    <ul class="nav-list">
      <li
        :class="['item', { active: nowIndex === index }]"
        v-for="(item, index) in navList"
        :key="index"
        @click="tabClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import VueRouter from 'vue-router'

export default {
  name: 'Index',
  data () {
    return {
      navList: [
        { name: '页面一' },
        { name: '页面二' },
        { name: '页面三' },
        { name: '页面四' },
        { name: '页面五' }
      ],
      nowIndex: 0
    }
  },
  methods: {
    tabClick (index) {
      this.nowIndex = index;
      this.$root.eventHub.$emit('changeTab', index)
    },
    slideTab (index) {
      this.nowIndex = index;
      let router = new VueRouter();
      /**
       *  利用路由的push方法更新路径地址 
       *  this.$router 实际上就是全局路由对象任何页面都可以调用 push(), go()等方法；
       */
      switch (index) {
        case 0:
          router.push({ path: '/one' });
          break;
        case 1:
          router.push({ path: '/two' });
          break;
        case 2:
          router.push({ path: '/three' });
          break;
        case 3:
          router.push({ path: '/four' });
          break;
        case 4:
          router.push({ path: '/five' });
          break;

        default:
          router.push({ path: '/one' });
          break;
      }
    },
    initPage () {
      /**
       *  this.$route  表示当前正在用于跳转的路由器对象，
       *  可以调用其name、path、query、params等属性。
       */
      switch (this.$route.path) {
        case '/one':
          this.nowIndex = 0;
          break;
        case '/two':
          this.nowIndex = 1;
          break;
        case '/three':
          this.nowIndex = 2;
          break;
        case '/four':
          this.nowIndex = 3;
          break;
        case '/five':
          this.nowIndex = 4;
          break;
        default:
          this.nowIndex = 0;
          break;
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 初始化，保证刷新页面后内容区和导航键一致
      this.initPage();
    })
    // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
    this.$root.eventHub.$on('slideTab', this.slideTab);
  }
}
</script>

<style lang='less' scoped>
.nav {
  margin-bottom: 20px;
  .nav-list {
    width: 100%;
    overflow: hidden;
    .item {
      width: 20%;
      display: inline-block;
      text-align: center;
      height: 48px;
      line-height: 48px;
      &.active {
        background-color: #ccc;
      }
    }
  }
}
</style>

