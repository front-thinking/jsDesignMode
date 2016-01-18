/**
 * mode: 组合模式
 * 应用场景：组合模式将对象组合成树形结构，以表示“部分-整体”的层次结构。除了用来表示属性结构之外，
 *          组合模式的另一个好处是通过对象的多态性表现，使得用户对单个对象和组合对象的使用具有一致性。
 * DEMO：扫描文件夹
 * 补充：
 */

//Folder
var Folder = function (name) {
    this.name = name;
    this.files = [];
};

Folder.prototype.add = function (file){
    this.files.push(file);
};

Folder.prototype.scan = function () {
    console.log('开始扫描文件夹： ' + this.name);
    for(var i = 0, file, files = this.files; file = files[i++];){
        file.scan();
    }
};

//File
var File = function (name) {
    this.name = name;
};

File.prototype.add = function () {
    throw new Error('文件下面不能再添加文件');
};

File.prototype.scan = function () {
    console.log('开始扫描文件：' + this.name);
};


//========应用场景=======
var folder = new Folder('学习资料');
var folder1 = new Folder('JavaScript');
var folder2 = new Folder('jQuery');

var file1 = new File('JavaScript设计模式和开发实践');
var file2 = new File('精通jQuery');
var file3 = new File('重构与模式');

folder1.add(file1);
folder2.add(file2);

folder.add(folder1);
folder.add(folder2);
folder.add(file3);

folder.scan();
