<template>
  <div class="">
    <div>
      <h1>三级联动：天津市/市辖区/河东区</h1>
      <area-cascader
        :level="1"
        type="text"
        placeholder="请选择地区"
        v-model="form.address"
        :data="pcaa"
      ></area-cascader>
    </div>

    <div>
      <h1>省市二级联动：浙江省杭州市</h1>
      <area-cascader v-model="form.selected2" :data="pcaa"></area-cascader>
    </div>

    <div>
      <h1>三级联动：天津市/市辖区/河东区</h1>
      <div class="wrap_area_select">
        <span class="Names">地区:</span>
        <area-select
          style="display: flex"
          type="all"
          v-model="form.areaList"
          :level="2"
          :disableLinkage="linkage"
          :data="pcaa"
        ></area-select>
      </div>
    </div>

    <div>
      <h1>二级联动：天津市/市辖区</h1>
      <area-select
        type="all"
        :level="1"
        v-model="form.selected"
        :data="pcaa"
      ></area-select>
    </div>
  </div>
</template>

<script type="text/javascript">

// 局部引入样式
import 'vue-area-linkage/dist/index.css'
import { pca, pcaa } from 'area-data'

export default {
  data () {
    return {
      pca: pca,
      pcaa: pcaa,
      form: {
        address: '',
        selected2: '',
        areaList: '',
        selected: ''
      }
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.area-select.large {
  width: 100%;
  line-height: 20px;
}
</style>
