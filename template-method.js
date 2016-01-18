/**
 * mode: 模板方法模式
 * 应用场景：子类实现中的相同部分被上移到父类中，而将不同的部分留待子类来实现。
 * DEMO：Coffee or Tea
 * 补充：
 */

//=================父类，饮料类=============
var Beverage = function (){};

Beverage.prototype.boilWater = function () {
    console.log('把水煮沸');
};

//沸水冲泡，待子类重写
Beverage.prototype.brew = function (){};

//倒入被子里，待子类重写
Beverage.prototype.pourInCup = function (){};

//添加调料，待子类重写
Beverage.prototype.addCondiments = function (){};

//模板方法
Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
};



//=================子类，茶类=============
var Tea = function (){};

Tea.prototype = new Beverage();

Tea.prototype.brew = function (){
    console.log('用沸水冲泡茶叶');
};

Tea.prototype.pourInCup = function (){
    console.log('把茶水倒进杯子');
};

Tea.prototype.addCondiments = function () {
    console.log('添加柠檬');
};

var Tea1 = new Coffee();
Tea1.init();