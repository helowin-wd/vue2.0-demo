/**
 *  通过 type ->触发派发器 ->进行数据的更改
 */
import reducer from '@/reducers/counter';
import { PLUS, MINUS } from '@/actions/counter';

/** 这就是一个闭包：一个函数返回一个函数
 *  
 *  导出一个箭头函数，这个函数接收参数就是块组件传递过来的this
 *  这里用ctx接收this
 *  从reducer结构出需要的事件函数，传入必要的参数 ctx.$data 这样就可以拿到块组件中data函数返回的数据
 *  然后return一个函数：
 *     接收参数1：通过type确定响应哪个逻辑
 *     接收参数2：块组件可能会传递其他的参数，这里使用  ...args进行接收
 *  接着使用switch判断type类型，通过type确定响应哪个逻辑，进行数据的更改
 */
export default (ctx) => {
  console.log(ctx)
  const { plus, minus } = reducer(ctx.$data);
  return function (type, ...args) {
    console.log('0000', type, ...args)
    switch (type) {
      case PLUS:
        ctx.result = plus(...args);
        break;
      case MINUS:
        ctx.result = minus(...args);
        break;

      default:
        break;
    }
  }
}