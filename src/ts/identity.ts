// 泛型
// 输入输出具有相同的结构
// <T>推测输入的T为泛型标准
// arg:T  arg:T[] 输入T的泛型
interface identityFunc {
  <T>(arg: T): T;
  // T的名字可以改，这也是为啥很多人看不懂泛型的原因，奇奇怪怪的名字
  <Good>(arg: Good): Good;
  <Good>(arg: Array<Good>): Good;
}

// 内部: 两种写法等价
interface identityFunc2 {
  <T>(arg: Array<T>): T;
  <T>(arg: T[]): T;
}

// 不相同则会报错
let identity: identityFunc = arg => {
  return "hello";
};

let identity2: identityFunc2 = arg => {
  return arg[0];
};

identity("dsadsa");

// 范类型

class GenericNumber<T> {
  zeroValue: T = 0;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 多个泛型同时使用
function getProperty(obj: T, key: K) {
  return obj[key];
}

// 类型继承与泛型继承
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(
  c: new () => A,
): A {
  return new c();
}
