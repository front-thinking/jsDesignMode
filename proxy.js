/**
 * mode: ����ģʽ
 * ���壺Ϊһ�������ṩһ������Ʒ������ռλ�����Ա���ƶ����ķ��ʡ�
 * DEMO���˻��������
 * ���䣺����ģʽ�Ĺؼ������ͻ�������ֱ�ӷ���һ�������������Ҫ��ʱ���ṩһ��������������ƶ��������ķ��ʣ��ͻ�ʵ���Ϸ��ʵ��������������������������һЩ����֮���ٰ�����ת�����������
 */

//�������
var mult = function (){
    console.log('��ʼ����˻�');
    var a = 1;
    for (var i= 0, l=arguments.length; i < l; i++){
        a = a * arguments[i];
    }
    return a;
};


//���������
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

//�ھ��������Ӧ��
proxyMult(1, 2, 3, 4);//24
proxyMult(1, 2, 3, 4);//�����е�24