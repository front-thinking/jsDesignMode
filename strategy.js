/**
 * mode: ������ģʽ
 * ���壺����һϵ�е��㷨��������һ������װ����������ʹ���ǿ����໥�滻��
 * DEMO�����㽱��
 * ���䣺����ģʽ��Ŀ���ǽ��㷨��ʹ�ú�ʵ�ַ��뿪���������֣�1.һ������࣬��װ������㷨��2.������Context�����ܿͻ�������
 */

//���Զ���
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

//������
var calculateBonus = function (level, salary) {
    return strategies[level](salary);
};

//�ھ��������Ӧ��
console.log(calculateBonus("S", 20000));