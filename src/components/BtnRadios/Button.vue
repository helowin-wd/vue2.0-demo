<template>
  <button
    :class="['radio-btn', { current: index === curIndex }]"
    :data-index="index"
  >
    {{ item }}
  </button>
</template>

<script type="text/javascript">
export default {
  name: 'RadioBtn',
  props: {
    item: String,
    index: Number,
    curIndex: Number
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.radio-btn {
  height: 34px;
  border: none;
  outline: none;
  padding: 0 15px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  color: #999;
  background-color: #eee;
}
.current {
  border-color: red;
  color: red;
  background-color: #ffffff;
}
</style>
