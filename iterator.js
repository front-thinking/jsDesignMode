/**
 * mode: 迭代器模式
 * 定义：指的是提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴漏该对象的内部表示。
 * DEMO：迭代器的两种实现
 * 补充：
 */

//each版本
var each = function (arr, callback){
    for (var i= 0, l=arr.length; i < l; i++){
        if(callback(i, arr[i]) === false){
            break;
        }
    }
};


//迭代器类
var Iterator = function (obj){
    var current = 0;

    var next = function (){
        current += 1;
    };

    var isDone = function (){
        return current >= obj.length;
    };

    var getCurrItem = function () {
        return obj[current];
    };

    return {
        next: next,
        isDone: isDone,
        getCurrItem: getCurrItem
    };
}