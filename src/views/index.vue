<template>
  <div class="index">
    <h1>vue2.0目录页面</h1>
    <ul class="wrap">
      <li v-for="(item, index) in menuList" :key="index" @click="skip(item)">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import menuList from '@/data/menuItems.js'

export default {
  name: 'Index',
  data () {
    return {
      menuList
    }
  },
  methods: {
    skip (item) {
      console.log(item);
      this.$router.push(item);
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  li {
    padding: 20px 30px;
    margin: 20px;
    background: pink;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>
