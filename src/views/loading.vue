
<template>
  <div class=""></div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  created () {
    this.tool.showLoading('加载中', this)
    setTimeout(() => {
      this.tool.showLoading('合成中', this)
    }, 2000);
    setTimeout(() => {
      this.tool.hideLoading()
    }, 3000);
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
</style>
