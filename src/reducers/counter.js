// 处理counter组件相应的事件逻辑

function counterReducer (data) {

  // 加法
  function plus () {
    return data.result + 1;
  }

  // 减法
  function minus () {
    return data.result - 1;
  }

  return {
    plus,
    minus
  }
}

export default counterReducer
