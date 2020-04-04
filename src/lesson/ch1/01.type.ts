/**
 * 基本类型
 * @Author: Junting.liu
 * @Date: 2019-04-30 14:42:23
 * @Last Modified by: Junting
 * @Last Modified time: 2020-04-04 22:55:23
 */

// 布尔值
let isDone: boolean = false;

// 数字
// ts 里所有数字都是浮点数 (支持二进制、八进制、十进制、十六进制)
let decLiteral: number = 20; // 十进制
let hexLiteral: number = 0x14; // 十六进制 （0x: 表示16进制, 第一位代表 4, 第二位 1代表 16, 所以加起来 20） 4 * 16^0 + 1 * 16^1
let binaryLiteral: number = 0b10100; // 二进制, (安进2计算) 0 * 2^0 + 0 * 2^1 + 1 * 2^2 + 0 * 2^3 + 1 * 2^4
let octalLiteral: number = 0o24; // 八进制 4 * 8^0 + 2 * 8^1

// 字符串
let name_: string = 'Junting';
let age: number = 26;
let sentence = `Hello, my name is ${name_}.

I'm years old ${age}.
`;

// 数组
let list: number[] = [1, 2, 3]; // 定义一个所有成员为数字的数组
let list2: Array<number> = [1, 2, 3]; // 同上，不同的定义方式

// 元组 Tuple
// 定义一个已知元素数量和类型的数组
let x: [string, number];
x = ['Junting', 26]; // OK
//x = [2, 'error']; // Error
console.log(x[0]); // 'Junting', 访问方式和数组一样，通过下标的方式
// x[3] = 'world'; // 3.1版本后访问越界元素会报错，不再使用该特性; 越界元素值可以是 string 或 number （联合类型）

// 枚举 enum
// 为一组数值赋予友好的名字
enum Color { // 默认从下标数字 0 开始, 可以手动指定成员的数值
  Red,
  Green,
  Blue,
  Yellow = 5, // 修改第某一个元素的编号，下面的成员编号依次递增；也可以全部手动
  Black
}

let color: Color = Color.Red;
console.log(color); // 0
console.log(Color[0]); // 'Red'
console.log(Color.Black); // 6

// any
// 支持任何类型
let notSure: any = 4;
notSure = 'string';
notSure = false;
let list3: any[] = [1, 'str', false];
list3[1] = 5;

// void
// 没有任何类型 （函数没有返回值， 其返回值类型是 void）
// 声明一个 void 类型的变量没有什么意义，你只能赋值 undefined 和 null
function fn(): void {
  console.log('返回任何返回值');
}
let unusable: void = undefined; // undefined or null，可以赋值 undefined 和 null 是因为这两者本身就没有多大的意义

// null 和 undefined
// 两者类型本身用处不大，所以没有定义变量为此类型的必要
let u: undefined = undefined; // 也可以赋值 null
// u = null;
let u2: null = null; // 也可以赋值 undefined
// u2 = undefined;

// 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
// * tsc type.ts --strictNullChecks 使用严格模式，null 和 undefined 只能赋值给 void 和它们各自
// 如果想给一个变量支持多种类型可以采用：联合模式 （string | null | undefined）

// never
// 表示永远不存在的值的类型
// 类型是任何类型的子类型，也可以赋值给任何类型；
// 但没有任何类型是 never 的子类型； 即使 any 也不行

// 使用场景1: 函数不能有返回值，使用抛出异常来处理
function error(message: string):never {
  throw new Error(message);
}

function fail() { // 推断的返回值类型为never
  return error("Something failed");
}

// 使用场景2: 返回 never 的函数必须存在无法到达的终点
function infiniteLoop(): never {
  while(true) {}
}

// object
// object表示非原始类型，也就是除number，string，boolean，symbol，null 或 undefined 之外的类型。

// 声明
declare function create(o: object | null): void;


create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// 类型断言
// 你很清楚的知道该值是什么类型，断言该值就是这个类型
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。

let someValue:any = 'this is a string';
// let strLength: number = (<string>someValue).length; // 强制转化类型, 断言 someValue 是一个 string 类型
let strLength: number = (someValue as string).length; // JSX 语法里只支持 as
