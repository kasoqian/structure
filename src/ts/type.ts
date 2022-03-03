// 数组声明，以下两种写法等价

// 类型声明
let arr: number[];
// 泛型声明
let arrOther: Array<number>;

// tuple 元祖
// 元祖表示已知的类型
let arr3: [number, string] = [1, "2"];
let arr5: [number, ...string[]] = [1, "2"]

// 这样会报错
// let arr4: [number, string] = [1, 1];


// 枚举，在范围内进行取值
enum ColorList { Red ="Red" ,Green= "Green",Bule= "Bule" }
let Color:ColorList = ColorList.Red

// 类型断言，可以强制进行类型转换说明
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;