/**
 * mode: 享元模式
 * 应用场景：主要用于性能优化的模式，核心是运用共享技术来有效支持大量细粒度的对象。
 * DEMO：模特和内衣案例
 * 补充：
 */

var Model = function (sex) {
    this.sex = sex;
};

Model.prototype.takePoto = function () {
    console.log('sex= ' + this.sex + ' underwear=' + this.underwear);
};

//共享的两个model
var maleModel = new Model('male'),
    femaleModel = new Model('female');

//不用再创建50个model了
for (var i=1; i<=50; i++){
    maleModel.underwear = 'underwear' + i;
    maleModel.takePoto();
}