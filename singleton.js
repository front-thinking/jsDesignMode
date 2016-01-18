/**
 * mode: ����ģʽ
 * ���壺��֤һ�������һ��ʵ�������ṩһ����������ȫ�ַ��ʵ㡣
 * DEMO������һ��ȫ��Ψһ��DIV�����¼����
 * ���䣺��ѭ��һְ��ԭ��ͨ�õ�ʵ��
 */

//��ȡ�����Ĺ��ߺ�������������Ĵ������뿪������һְ��ԭ��
var getSingle = function (fn){
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

//���崴��DIV�ĺ���
var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '���ǵ�¼��';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
};


var createSingleLoginLayer = getSingle(createLoginLayer);
//�ھ��������Ӧ��
document.getElementById('loginBtn').onclick = function (){
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
};