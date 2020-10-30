<template>
  <div class="calculator_wrap">
    <cal-result :result="result" />
    <div class="inputs">
      <cal-input field="firstNumber" @dispatch="dispatch" />
      <cal-input field="secondNumber" @dispatch="dispatch" />
    </div>
    <div class="buttons">
      <cal-button
        innerText="+"
        method="plus"
        :curMethod="curMethod"
        @dispatch="dispatch"
      />
      <cal-button
        innerText="-"
        method="minus"
        :curMethod="curMethod"
        @dispatch="dispatch"
      />
      <cal-button
        innerText="*"
        method="mul"
        :curMethod="curMethod"
        @dispatch="dispatch"
      />
      <cal-button
        innerText="/"
        method="div"
        :curMethod="curMethod"
        @dispatch="dispatch"
      />
    </div>
  </div>
</template>

<script type="text/javascript">

import CalResult from './Result';
import CalInput from './Input';
import CalButton from './Button';

import dispatch from '@/dispatchs/calculator';

export default {
  name: 'Calculator',
  components: {
    CalResult,
    CalInput,
    CalButton
  },
  data () {
    return {
      firstNumber: 0,
      secondNumber: 0,
      curMethod: 'plus',
      result: 0
    }
  },
  methods: {
    dispatch (...args) {
      dispatch(this)(...args)
    }
    // setNumber (field, value) {
    //   this[field] = value;
    //   this.setResult();
    // },
    // dispatch (method) {
    //   this.curMethod = method;
    //   this.setResult();
    // },
    // setResult () {
    //   this.result = this.compute(this.curMethod, this.firstNumber, this.secondNumber)
    // }
  }
}
</script>

<style lang="less" scoped>
</style>
