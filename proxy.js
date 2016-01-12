/**
 * mode: 代理模式
 * 定义：为一个对象提供一个代用品或者是占位符，以便控制对它的访问。
 * DEMO：乘积缓存代理
 * 补充：代理模式的关键：当客户不方便直接访问一个对象或不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象对请求作出一些处理之后，再把请求转交给本体对象。
 */

//本体对象
var mult = function (){
    console.log('开始计算乘积');
    var a = 1;
    for (var i= 0, l=arguments.length; i < l; i++){
        a = a * arguments[i];
    }
    return a;
};


//缓存代理函数
var proxyMult = (function (){
    var cache = {};
    return function (){
        var args = Array.prototype.join.call(arguments, ',');
        for (args in cache){
            return cache[args];
        }
        return cache[args] = mult.apply(this, arguments);
    }
})();

//在具体情况下应用
proxyMult(1, 2, 3, 4);//24
proxyMult(1, 2, 3, 4);//缓存中的24