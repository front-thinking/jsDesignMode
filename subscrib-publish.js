/**
 * mode: ����������ģʽ���ֳƹ۲���ģʽ��
 * ���壺���������һ��һ�Զ��������ϵ����һ�������״̬�����ı�ʱ���������������Ķ��󶼽��õ�֪ͨ
 * ˵����1.����������ģʽ�㷺Ӧ�����첽����У�����һ��������ݻص������ķ�����2.����������ģʽ����ȡ������֮���֪ͨ���ƣ�һ������������ʾ�ص�������һ�������ĳ���ӿڡ�
 *
 */

/**
* DEMO1����¥���İ���
* �������裺1.ָ����˭�䵱�����ߣ��ȷ�˵��¥����
*          2.�����������һ�������б����ڴ�Żص������Ա�֪ͨ�����ߣ�����¥���Ļ����ᣩ
*          3.��󷢲���Ϣ��ʱ�򣬷����߻������������б����δ��������ŵĶ����߻ص����������������ᣬ����������֪ͨ��
*/
//���Զ��Ĳ�ͬ�Ĺؼ���Ϣkey
var salesOffices = {};//������¥������������

salesOffices.clientList = [];//�����б���Ŷ����ߵĻص�����

salesOffices.listen = function (key, fn) {
    if(!this.clientList[key]){//�����û�ж��Ĺ�������Ϣ����������Ϣ����һ�������б�
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);//���ĵ���Ϣ��ӽ���Ϣ�����б�
};

salesOffices.trigger = function(){//������Ϣ
    var key = Array.prototype.shift.call(arguments),//ȡ����Ϣ����
        fns = this.clientList[key];//ȡ������Ϣ��Ӧ�Ļص����������б�
    if(!fns || fns.length === 0){
        return false;
    }

    for(var i= 0, l=fns.length; i < l; i++){
        fn.apply(this, arguments);
    }
};


salesOffices.listen('squareMeter88', function (price) {
   console.log('�۸�=' + price);
});

salesOffices.listen('squareMeter110', function (price) {
    console.log('�۸�=' + price);
});

salesOffices.trigger('squareMeter88', 2000000);
salesOffices.trigger('squareMeter110', 3000000);


/**
 *DEMO2����ͨ�õ�ʵ��
 */

//������
var event = {
    clientList: [],
    listen: function(key, fn){
        if(!clientList[key]){
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    trigger: function (){
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];
        if(!fns || fns.length === 0){
            return false;
        }

        for(var i= 0, l=fns.length; i < l; i++){
            fn.apply(this, arguments);
        }
    },
    remove: function (key, fn){
        var fns = this.clientList[key];

        if(!fns){//��ʾkey��Ӧ����Ϣû�˱����ģ�ֱ�ӷ���false
            return false;
        }
        if(!fn){//���û�д������ĺ��������ʾȡ������key���еĶ�����
            fns && (fns.length = 0);
        }else{
            for(var l=fns.length; l >= 0; l--){
                var _fn = fns[l];
                if(_fn === fn){
                    fns.splice(1, 1);
                }
            }
        }
    }
};

//����ͨ����ת��Ϊ�����ߵĹ��ߺ���
var installEvent = function (obj){
    for (var i in event){
        obj[i] = event[i];
    }
};

//��ͨ�õ�ģʽȥʵ��DEMO1
var salesOffices = {};
installEvent(salesOffices);

salesOffices.listen('squareMeter88', function fn1(price){
    console.log('�۸�=' + price);
});

salesOffices.listen('squareMeter110', function (price){
    console.log('�۸�=' + price);
});

salesOffices.trigger('squareMeter88', 2000000);
salesOffices.trigger('squareMeter110', 3000000);

salesOffices.remove('squareMeter88', fn1);//ȡ������