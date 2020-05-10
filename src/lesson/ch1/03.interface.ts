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
 * @Last Modified by: Junting
 * @Last Modified time: 2020-04-16 23:58:39
 */

// 接口定义

// 定义接口接收参数规则（契约）
interface LabelledValue {
  label: string
};

function printLabel(LabelledObj: LabelledValue) {
  console.log(LabelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// 定义接口可选属性+可读属性
interface Square {
  color: string,
  area: number
}
interface SquareConfig {
  color?: string, // 可选
  width?: number // 可选
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black'});

interface Point {
  readonly x: number, // 只读
  readonly y: number // 只读
}

let p1: Point = { x: 10, y: 10 }; // 一旦声明就不允许变更了
// p1.x = 20; // 只读

// ReadonlyArray<T> 类型
let arr: number[] = [1, 2, 3, 4];
let rArr: ReadonlyArray<number> = arr; // ReadonlyArray 实现也是一种接口
