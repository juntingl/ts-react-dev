// // class Auto {
// //   state = 1
// //   private status = 0
// // }

// // interface AutoInterface extends Auto {}

// // // error: Profile 不是 Auto 的子类，不允许拥有
// // // class Profile implements AutoInterface{}

// // class Log<T> {
// //   print(value: T) {
// //     console.log(value)
// //     return value
// //   }
// // }

// // let log1 = new Log<number>();
// // log1.print(123)
// // log1.print('Junting')
// // let log2 = new Log()
// // log2.print(666)
// // log2.print('Junting')

// // interface Length {
// //   length: number
// // }
// // function log <T extends Length>(value: T) {
// //   console.log(value, value.length);
// //   return value;
// // }
// // log('123');
// // log([1, 2, 3]);
// // log({ name: 'junting', age: 18 });
// // log({ name: 'junting', age: 18 , length: 2});

// // let n = 1;
// // let b = [1];

// // let func1 = (x =1) => x**2

// // let arr1 = [1, null];

// window.onkeydown = (event: KeyboardEvent) => {
//   console.log(event);
// }

// // let s: string = 'string';
// // s = null;

// interface int1 {
//   a: any,
//   b: any,
//   c: any
// }

// interface int2 {
//   a: any,
//   b: any,
// }

// // let X:int1 = {a: 1, b: 2, c: 3}
// // let Y:int2 = { a: 1, b: 2 }

// // X =  Y; //
// // Y = X;

// // 函数作为参数的情况下。
// type Handler = (a: number, b: number) => void; // 目标类型

// // 当传递一个函数参数时，就会判断类型是否兼容
// function hof(handler: Handler) {
// 	return handler
// }

// let handler1 = (a: number) => {}
// hof(handler1); // ok

// // let handler2 = (a: number, b:  number, c: number) => {}
// // hof(handler2); // error:

// // let handler3 = (a: string) => {}
// // hof(handler3)

// interface Point3D {
//   x: number;
//   y: number;
//   z: number;
// }

// interface Point2D {
//   x: number;
//   y: number;
// }

// let p3d = (point: Point3D) => {}
// let p2d = (point: Point2D) => {}

// p3d = p2d // true
// // p2d = p3d; // error

// enum Type { Strong, Week }

// class Java {
//   helloJava() {
//     console.log('Hello Java.')
//   }

//   java: any
// }

// class JavaScript {
//   helloJavaScript() {
//     console.log('Hello JavaScript.')
//   }

//   javaScript: any
// }

// function getLanguage (type: Type) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript();

//   if ('helloJava' in lang) {
//     lang.helloJava()
//   } else {
//     lang.helloJavaScript()
//   }

//   return lang
// }

// getLanguage(Type.Strong)

// class Dog {
//   run() {}
//   eat() {}
// }

// class Eat {
//   jump(){}
//   eat() {}
// }

// enum Master { Boy, Girl }

// function getPet(master: Master) {
//   let pet = master === Master.Boy ? new Dog() : new Eat();
//   pet.eat() //
//   // pet.run() // error:
//   return pet
// }

// interface Square {
//   kind: 'square'
//   size: number
// }

// interface Rectangle {
//   kind: 'rectangle'
//   width: number
//   height: number
// }

// interface Circle {
//   kind: 'circle'
//   r: number
// }

// type Shape = Square | Rectangle | Circle
// // function area (s: Shape) {
// //   switch(s.kind) {
// //     case 'square':
// //       return s.size * s.size
// //     case 'rectangle':
// //       return s.width * s.height
// //     default:
// //       // 如果
// //       return ((e: never) => { throw new Error(e)})(s)
// //   }
// // }

// interface Obj {
//   a: number
//   b: string
// }

// let key: keyof Obj
// let value: Obj['a']

// // interface Obj {
// //   a: string
// //   b: number
// //   c: boolean
// // }

// // 返回一个 Obj 接口所有成员为只读的类型
// type ReadonlyObj = Readonly<Obj>;

// type PickObj = Pick<Obj, 'a' | 'b'>

// type RecordObj = Record<'x' | 'y', Obj>;

// type TypeName<T> =
// 	T extends string ? "string" :
//   T extends number ? "number" :
//   T extends boolean ? "boolean" :
//   T extends undefined ? "undefined" :
//   T extends Function ? "function" :
//   "object";

// type T1 = TypeName<string> // "string"
// type T2 = TypeName<string[]> // "object"
// type T3 = TypeName<string | string[]> // type T3 = "string" | "object"

// type Diff<T, U> = T extends U ? never : T;

// type T4 = Diff<"a" | "b" | "c", "a" | "e">

// type NotNull<T> = Diff<T, undefined | null>

// type T5 = NotNull<string | number | undefined | null>

// type T6  = Extract<"a" | "b" | "c", "a" | "e">
// type T7  = Exclude<"a" | "b" | "c", "a" | "e">


// interface A {
//   x: number;
// 	foo(bar: number): number;
// }

// interface A {
//   y: number;
//   foo(bar: string): string;
// }

// let a12: A = {
//   x: 1,
//   y: 1,
//   foo(bar: any) {
//     return bar
//   }
// }

// let hello: string = 'hello TypeScript!';
// document.querySelectorAll('.app')[0].innerHTML = hello;

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/demo/Hello';

ReactDOM.render(<Hello name="TypeScript"/>, document.querySelectorAll('.app')[0]);
