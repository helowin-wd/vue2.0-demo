
/**
 * 
 * @param {*} fn 
 * @param {*} delay 
 * 
 * 节流函数throttle：在delay时间内，时间只触发一次
 * 防抖函数：在delay时间后，输入完成后多长时间才会触发一次；如果在输入时间内，用户再次输入就会重新计时
 */
function throttle (fn, delay) {
  var t = null,
    begin = new Date().getTime();
  return function () {
    var _self = this,
      args = arguments,
      cur = new Date().getTime();

    clearTimeout(t);

    if (cur - begin >= delay) {
      fn.apply(_self, args);
      begin = cur;
    } else {
      t = setTimeout(function () {
        fn.apply(_self, args)
      }, delay);
    }
  }
}

export {
  throttle
}