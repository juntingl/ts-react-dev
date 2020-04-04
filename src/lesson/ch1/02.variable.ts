/**
 * 变量声明 and 解构 （deconstruction）
 * @Author: Junting.liu
 * @Date: 2019-04-30 14:43:28
 * @Last Modified by: Junting
 * @Last Modified time: 2020-04-04 22:56:03
 */

// var

// let
let e2 = "实现 let / a";

try {
  throw "实现 let"
} catch(e) {
  console.log(e); // "实现 let"
}
// const

// let vs const

//变量声明 - 解构
let input:[number, number] = [1, 2];

// 方式1:
function f([first, second]: [number, number]) { //元组
  console.log(first);
  console.log(second);
}

f(input);

// 方式2:
let [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest);

let [ ,second, ,fourth] = [1, 2, 3, 4];
console.log(second);
console.log(fourth);

// 对象结构
let obj = {
  a: 1,
  b: 'start',
  c: [1, 2]
};

let { a, c } = obj;
console.log(a);
console.log(c);

let {...passthrough} = obj;
console.log(passthrough);

let { b: newName } = obj;
// let { b: newName }:{ b: string } = obj; // 重命名后的类型指定
console.log(newName);


//变量声明 - 默认值
function func(obj: { a: number, b?: string}) { // ? 代表不是必传的
  let {a, b = 'hav value'} = obj;
  console.log(a, b);
}


function func2({ a, b = 10 } = { a : ''}) {
  console.log(a, b);
}

func2(); // 不传任何参数 10
func2({ a: 'yes'}); // yes 10
// func2({}); // 传空对象, 要嘛什么都不传，要传 必须传带有 a 属性值，不然类型推断会提示错误


// 变量声明 - 展开
let val1 = [1, 2];
let val2 = [3, 4];
let val3 = [5, ...val1, ...val2];
console.log(val3);

let defaults = {
  food: 'spicy',
  price: '$10',
  ambiance: 'noisy'
};

let search = { ...defaults, food: 'rich' };
console.log(search);
