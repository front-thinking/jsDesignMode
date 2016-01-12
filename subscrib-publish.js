/**
 * mode: ����������ģʽ���ֳƹ۲���ģʽ��
 * ���壺���������һ��һ�Զ��������ϵ����һ�������״̬�����ı�ʱ���������������Ķ��󶼽��õ�֪ͨ
 * ˵����1.����������ģʽ�㷺Ӧ�����첽����У�����һ��������ݻص������ķ�����2.����������ģʽ����ȡ������֮���֪ͨ���ƣ�һ������������ʾ�ص�������һ�������ĳ���ӿڡ�
 * DEMO����¥���İ���
 * �������裺1.ָ����˭�䵱�����ߣ��ȷ�˵��¥����
 *          2.�����������һ�������б����ڴ�Żص������Ա�֪ͨ�����ߣ�����¥���Ļ����ᣩ
 *          3.��󷢲���Ϣ��ʱ�򣬷����߻������������б����δ��������ŵĶ����߻ص����������������ᣬ����������֪ͨ��
 *
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