<template>
  <button :action="action" @click="compute">{{ innerText }}</button>
</template>

<script type="text/javascript">
export default {
  name: 'CounterBtn',
  props: {
    innerText: String,
    action: String
  },
  methods: {
    compute () {
      this.$emit('dispatch', this.action, 222)
    }
  }

}
</script>

<style lang="less" scoped>
</style>
