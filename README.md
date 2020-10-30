# vue2.0随堂笔记

## 组件化设计原理

组件划分：

1. 页面组件：仅仅是块组件的容器，`切记不要在页面组件写逻辑`

2. 块组件分为：

   组件出口`index.vue` ：数据保存 + 逻辑

   子组件：视图  + 父子组件传递数据

借鉴redux的事件派发器，进行相应改造

* 通过type -> 确定事件 -> 找到事件相应的逻辑

  `src / reducers `管理组件相应事件的逻辑

  例如：src / actions / counter.js   管理counter组件里面的type类型

  ```js
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
  
  ```

  `src / actions `管理组件里面的type类型

  例如：src / actions / counter.js   管理counter组件里面的type类型

  ```js
  // 管理counter组件里面的type类型
  const PLUS = 'PLUS',
    MINUS = 'MINUS';
  
  export {
    PLUS,
    MINUS
  }
  ```

* 再通过 type ->触发派发器 ->进行数据的更改

