// 默认参数
function sayHi(name = "kasoqian") {}

// 重载
// 写出该函数的所有可能情况
// 1.有效进行类型检查
// 2.有效避免any any
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x): any {}
