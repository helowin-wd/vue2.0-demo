<template>
  <div class="wrap">
    <input
      v-model="input_value"
      type="text"
      placeholder="请搜索"
      @keyup="searchAction"
      ref="input"
    />
    <ul v-show="isShow">
      <li
        v-for="(item, index) of searchRes"
        :key="index"
        @click="choose(item.name)"
      >
        <div>{{ item.name }}</div>
      </li>
    </ul>
    <div v-show="!isShow && !isClick && input_value.length == 0">搜索历史</div>
    <div v-if="searchRes.length == 0 && input_value.length > 0">
      暂无搜索结果
    </div>
  </div>
</template>

<script type="text/javascript">

import { throttle } from '@/libs/utils';

export default {
  data () {
    return {
      searchRes: [], // 搜索的结果
      CourseData: [
        { name: '北京1' },
        { name: '上海1' },
        { name: '广州2' },
        { name: '深圳3' }
      ],
      input_value: '', // 输入框的值
      isClick: false, // 是否点击搜索项
      isShow: false  // 是否展示数据列表
    }
  },
  methods: {

    // 选择列表选项
    choose (props) {
      this.isClick = true;
      this.isShow = false;
      this.input_value = props
    },
    // 搜索输入框
    searchAction: throttle(function (e) {

      //拿到当前input输入框输入的值
      this.input_value = this.$refs.input.value;

      //判断展示ul列表，如果输入了就展示没输入就不展示
      this.isClick = this.isShow = this.input_value.length > 0 ? true : false

      console.log(this.input_value, this.isShow, this.isClick)

      this.searchRes = this.CourseData.filter((item) => {
        if (item.name.includes(e.target.value)) {
          return item;
        }
      })
    }, 300)
  }
}
</script>

<style lang="less" scoped>
</style>
