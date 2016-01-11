/**
 * mode: 策略者模式
 * 定义：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
 * DEMO：计算奖金
 * 补充：策略模式的目的是将算法的使用和实现分离开来；两部分：1.一组策略类，封装具体的算法；2.环境类Context，接受客户的请求。
 */

//策略对象
var strategies = {
    "S": function (salary){
        return salary * 4;
    },
    "A": function (salary){
        return salary * 3;
    },
    "B": function (salary){
        return salary * 2;
    }
};

//环境类
var calculateBonus = function (level, salary) {
    return strategies[level](salary);
};

//在具体情况下应用
console.log(calculateBonus("S", 20000));