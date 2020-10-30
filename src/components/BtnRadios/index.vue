<template>
  <div class="wrapper" @click="radioCheck($event)">
    <radio-btn
      v-for="(item, index) of subjects"
      :key="index"
      :index="index"
      :curIndex="curIndex"
      :item="item"
    />
  </div>
</template>

<script type="text/javascript">

import RadioBtn from './Button'

export default {
  name: 'Btn',
  props: {
    subjects: Array
  },
  components: {
    RadioBtn
  },
  data () {
    return {
      curIndex: 0
    }
  },
  methods: {
    // 点击事件
    radioCheck (e) {
      // 保存事件源对象
      const tar = e.target,
        className = tar.className;

      console.log(tar);
      // 结果例如：<button class="radio-btn current" data-index="1"></button>
      console.log(className); // 结果：radio-btn

      if (className === 'radio-btn') {
        // 通过子组件绑定自定义属性，父组件通过事件源对象获取绑定的属性
        const index = parseInt(tar.dataset.index);
        this.curIndex = index;
      }
    }
  }

}
</script>

<style lang="less" scoped>
</style>
