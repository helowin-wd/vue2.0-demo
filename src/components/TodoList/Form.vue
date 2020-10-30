<template>
  <div class="Form">
    <form action="" @submit="submitText">
      <input type="text" v-model.trim="todoText" placeholder="请输入" />
    </form>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Form',
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    submitText (e) {
      e.preventDefault();

      if (this.todoText.length === 0) {
        return;
      }

      this.$emit('dispatch', 'ADD', {
        id: Date.now(),
        text: this.todoText,
        completed: false
      })

      this.todoText = '';
    }
  }
}
</script>

<style lang="less" scoped>
</style>
