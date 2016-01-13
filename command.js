/**
 * mode: 命令者模式
 * 应用场景：有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么。
 * DEMO：绑定按钮操作
 * 补充：
 */

//HTML结构
/*
 *  <button id='button1'>按钮1</button>
 *  <button id='button2'>按钮2</button>
 *  <button id='button3'>按钮3</button>
* */

//命令的请求者
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');

//设置命令
var setCommand = function(button, command){
  button.onclick = function(){
      command.execute();
  }
};


//命令的真实执行者
var MenuBar = {
    refresh: function (){
        console.log('刷新菜单目录');
    }
};

var SubMenu = {
    add: function (){
        console.log('新增子菜单目录');
    },
    del: function (){
        console.log('删除子菜单目录');
    }
};


//命令对象封装
var RefreshMenuBarCommand = function (receiver) {
    this.receiver = receiver;
};

RefreshMenuBarCommand.prototype.execute = function () {
    this.receiver.refresh();
};


var AddSubMenuCommand = function (receiver) {
    this.receiver = receiver;
};

AddSubMenuCommand.prototype.execute = function () {
    this.receiver.add();
};

var DelSubMenuCommand = function (receiver) {
    this.receiver = receiver;
};

DelSubMenuCommand.prototype.execute = function () {
    this.receiver.del();
};

//使用
var refreshMenuBarCommand = new RefreshMenuBarCommand(MenuBar);
var addSubMenuCommand = new RefreshMenuBarCommand(SubMenu);
var delSubMenuCommand = new RefreshMenuBarCommand(SubMenu);

//设置命令
setCommand(btn1, refreshMenuBarCommand);
setCommand(btn2, addSubMenuCommand);
setCommand(btn3, delSubMenuCommand);