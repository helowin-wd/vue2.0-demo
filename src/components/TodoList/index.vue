<template>
  <div class="todoList">
    <td-title :title="title"></td-title>
    <td-form @dispatch="dispatch"></td-form>
    <td-list :todoData="todoData" @dispatch="dispatch"></td-list>
  </div>
</template>

<script type="text/javascript">

import tdTitle from './Title';
import tdForm from './Form';
import tdList from './list';

import dispatch from '@/dispatchs/todoList';

export default {
  name: 'todoList',
  components: {
    tdTitle,
    tdForm,
    tdList
  },
  data () {
    return {
      title: 'Todo Lsit',
      todoData: []
    }
  },
  methods: {
    dispatch (...args) {
      dispatch(this)(...args)
    }
  }

}
</script>

<style lang="less" scoped>
</style>
