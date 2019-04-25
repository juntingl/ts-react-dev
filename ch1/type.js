// 布尔值
var isDone = false;
// 数字
// ts 里所有数字都是浮点数 (支持二进制、八进制、十进制、十六进制)
var decLiteral = 20; // 十进制
var hexLiteral = 0x14; // 十六进制 （0x: 表示16进制, 第一位代表 4, 第二位 1代表 16, 所以加起来 20） 4 * 16^0 + 1 * 16^1
var binaryLiteral = 20; // 二进制, (安进2计算) 0 * 2^0 + 0 * 2^1 + 1 * 2^2 + 0 * 2^3 + 1 * 2^4
var octalLiteral = 20; // 八进制 4 * 8^0 + 2 * 8^1
// 字符串
var name_ = 'Junting';
var age = 26;
var sentence = "Hello, my name is " + name_ + ".\n\nI'm years old " + age + ".\n";
// 数组
var list = [1, 2, 3]; // 定义一个所有成员为数字的数组
var list2 = [1, 2, 3]; // 同上，不同的定义方式
// 元组 Tuple
// 定义一个已知元素数量和类型的数组
var x;
x = ['Junting', 26]; // OK
//x = [2, 'error']; // Error
console.log(x[0]); // 'Junting', 访问方式和数组一样，通过下标的方式
// x[3] = 'world'; // 3.1版本后访问越界元素会报错，不再使用该特性; 越界元素值可以是 string 或 number （联合类型）
// 枚举 enum
// 为一组数值赋予友好的名字
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Black"] = 6] = "Black";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c); // 0
console.log(Color[0]); // 'Red'
console.log(Color.Black); // 6
// any
// 支持任何类型
var notSure = 4;
notSure = 'string';
notSure = false;
var list3 = [1, 'str', false];
list3[1] = 5;
// void
// 没有任何类型 （函数没有返回值， 其返回值类型是 void）
// 声明一个 void 类型的变量没有什么意义，你只能赋值 undefined 和 null
function fn() {
    console.log('返回任何返回值');
}
var unusable = undefined; // undefined or null，可以赋值 undefined 和 null 是因为这两者本身就没有多大的意义
// null 和 undefined
// 两者类型本身用处不大，所以没有定义变量为此类型的必要
var u = undefined; // 也可以赋值 null
// u = null;
var u2 = null; // 也可以赋值 undefined
u2 = undefined;
// * tsc type.ts --strictNullChecks 使用严格模式，检查 null 类型
