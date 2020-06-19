import Vue from 'vue'


// 防抖函数，在规定时间内只执行最后一次函数调用
Vue.prototype.$debounce = function(fn, wait) {

    let timeout = null;
    return function() {
        if(timeout !== null){
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn, wait);
    }
};

// 节流函数，在规定时间内只会处理一次函数
Vue.prototype.$throttle = function(func, delay) {
    let prev = Date.now();
    return function() {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}

