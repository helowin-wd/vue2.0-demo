<template>
  <div class="list">
    <ul>
      <list-item
        v-for="(item, index) of todoData"
        :key="index"
        :item="item"
        @handleItem="handleItem"
      />
    </ul>
  </div>
</template>

<script type="text/javascript">

import listItem from './ListItem';

export default {
  name: 'List',
  components: {
    listItem
  },
  props: {
    todoData: Array
  },
  methods: {
    handleItem (...args) {
      this.$emit('dispatch', ...args)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
