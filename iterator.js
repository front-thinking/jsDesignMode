/**
 * mode: ������ģʽ
 * ���壺ָ�����ṩһ�ַ���˳�����һ���ۺ϶����еĸ���Ԫ�أ����ֲ���Ҫ��©�ö�����ڲ���ʾ��
 * DEMO��������������ʵ��
 * ���䣺
 */

//each�汾
var each = function (arr, callback){
    for (var i= 0, l=arr.length; i < l; i++){
        if(callback(i, arr[i]) === false){
            break;
        }
    }
};


//��������
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