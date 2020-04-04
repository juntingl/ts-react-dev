/**
 * 接口（契约）
 * 1、接口初探
 * 2、可选属性
 * 3、只读属性
 * 4、额外属性检查
 * 5、函数类型
 * 6、可索引类型
 * 8、类类型
 * 9、继承接口
 * 10、混合类型
 * 11、接口继承类
 * @Author: Junting.liu
 * @Date: 2019-04-30 18:10:53
 * @Last Modified by: Junting.liu
 * @Last Modified time: 2019-04-30 19:39:21
 */
;
function printLabel(LabelledObj) {
    console.log(LabelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var p1 = { x: 10, y: 10 }; // 一旦声明就不允许变更了
// p1.x = 20; // 只读
