<template>
  <div class="">
    <h1>刻度尺</h1>
    <cs-ruler
      @post-NumValue="rulerNum"
      :NowNum="100"
      :maxNum="100"
      :minNum="0"
    ></cs-ruler>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  methods: {
    //子组件传递刻度表
    rulerNum (value) {
      this.NumValue = value
    },
  },

}
</script>

<style lang="less" scoped>
</style>
