<template>
  <div class="">
    <btn-radios :subjects="subjects" />
  </div>
</template>

<script type="text/javascript">

// 实际引入的是：@/components/BtnRadios/index.vue 【自定义插件的入口文件】
import BtnRadios from '@/components/BtnRadios'

export default {
  name: 'BtnRadio',
  components: {
    BtnRadios
  },
  created () {
    this.$toast('查询支付结果', 300000)
  },
  data () {
    return {
      subjects: [
        'Vue',
        'React',
        'Angular'
      ]
    }
  },

}
</script>

<style lang="less" scoped>
</style>
