import Vue from 'vue'

// 财务金额格式化
Vue.filter('amountFormatter', function (v) {

    let num;
    if (isNaN(v)) {
        return '0.00'
    }

    num = (parseFloat((v + "").replace(/[^\d\.-]/g, ""))  / 100).toFixed(2) + "";
    let l = num.split(".")[0].split("").reverse()
    let r = num.split(".")[1];
    let t = "";
    for(let i = 0; i < l.length; i ++ )   {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
})