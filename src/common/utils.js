/**
 *  debounce：防抖方法
 *    params
 *       func,
 *       delay
 *    return
 *       [function]
 */
export function debounce(func, delay = 1500) {
    let timer = null;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            func.call(this, ...args);
        }, delay);
    }
}