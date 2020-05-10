/**
 * 类实现
 */
class Greeter {
  // 熟悉
  greeting: string

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting
  }
}

abstract class Animal {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
  abstract sleep(): void
}

// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   move(distance: number = 5) {
//     console.log('Slithering...');
//     super.move(distance);
//   }
// }
