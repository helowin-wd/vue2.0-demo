<template>
  <div>
    <counter-result :result="result" />
    <div>
      <counter-button innerText="+" action="PLUS" @dispatch="dispatch" />
      <counter-button innerText="-" action="MINUS" @dispatch="dispatch" />
    </div>
  </div>
</template>

<script type="text/javascript">

import CounterResult from './Result';
import CounterButton from './CounterButton'

// 导入派发器
import dispath from '@/dispatchs/counter'

export default {
  name: 'Index',
  data () {
    return {
      result: 0
    }
  },
  components: {
    CounterResult,
    CounterButton
  },
  methods: {
    /**
     * 解析：dispath(this)(...args)  【...args 表示：子组件向外触发事件$emit，传递的若干参数】
     *   第一个dispath(this)  传递this, 表示 import dispath from '@/dispatchs/counter' 
     *     文件里面箭头函数的执行(ctx) => {  return function (type, ...args) {}  }
     *   第二个 dispath(this)(...args) 表示里面 return函数的执行 传递若干参数
     */
    dispatch (...args) {
      console.log('传递的参数', ...args)
      dispath(this)(...args)
    }
  },

}
</script>

<style lang="less" scoped>
</style>
