/**
 * mode: 单例模式
 * 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 * DEMO：创建一个全局唯一的DIV，如登录界面
 * 补充：遵循单一职责原则，通用的实现
 */

//获取单利的工具函数，与具体对象的创建分离开来，单一职责原则
var getSingle = function (fn){
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

//具体创建DIV的函数
var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录框';
    div.style.display = 'none';
    document.body.appendChild(div);
};

//在具体情况下应用
document.getElementById('loginBtn').onclick = function (){
  var loginLayer = getSingle(createLoginLayer);
    loginLayer.style.display = 'block';
};