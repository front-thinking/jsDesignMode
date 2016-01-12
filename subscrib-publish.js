/**
 * mode: 发布订阅者模式（又称观察者模式）
 * 定义：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知
 * 说明：1.发布订阅者模式广泛应用于异步编程中，这是一种替代传递回调函数的方案；2.发布订阅者模式可以取代对象之间的通知机制，一个对象不用再显示地调用另外一个对象的某个接口。
 * DEMO：售楼处的案例
 * 案例步骤：1.指定好谁充当发布者（比方说售楼处）
 *          2.给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（如售楼处的花名册）
 *          3.最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数（遍历花名册，挨个发短信通知）
 *
 */

//可以订阅不同的关键信息key
var salesOffices = {};//定义售楼处，即发布者

salesOffices.clientList = [];//缓存列表，存放订阅者的回调函数

salesOffices.listen = function (key, fn) {
    if(!this.clientList[key]){//如果还没有订阅过此类消息，给该类消息创建一个缓存列表
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);//订阅的消息添加进消息缓存列表
};

salesOffices.trigger = function(){//发布消息
    var key = Array.prototype.shift.call(arguments),//取出消息类型
        fns = this.clientList[key];//取出该消息对应的回调函数缓存列表
    if(!fns || fns.length === 0){
        return false;
    }

    for(var i= 0, l=fns.length; i < l; i++){
        fn.apply(this, arguments);
    }
};


salesOffices.listen('squareMeter88', function (price) {
   console.log('价格=' + price);
});

salesOffices.listen('squareMeter110', function (price) {
    console.log('价格=' + price);
});

salesOffices.trigger('squareMeter88', 2000000);
salesOffices.trigger('squareMeter110', 3000000);