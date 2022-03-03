// 不优雅的ts函数
function print(person: { name: string; age: number }) {}

// 优雅的函数
interface Print {
  name: string;
  age?: number;
}

function print(person: Print) {}

// 可选
interface Print {
  name?: string;
  age?: number;
}

// 只读
interface Point {
  readonly x: number;
  readonly y: number;
}

// 只读修改会发生错误
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

// 函数接口
interface printFunc {
  (key: any, value: string): object;
}

function print(printFunc) {}

// 类接口与继承
// 类 构造函数接口
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
// 类 成员变量接口
interface ClockInterface {
  tick();
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
