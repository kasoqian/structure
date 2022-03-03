// 栈是一个后进先出的数据结构
// 以下定义了一个栈类
// 入栈，出栈，栈顶，栈长，清空栈 5种方法
class Stack {
  private dataStore: any[] = [];
  private top = 0;

  push(e: any) {
    this.dataStore[this.top++] = e;

    return this.dataStore;
  }

  pop() {
    this.dataStore.length = this.top - 1;

    return this.dataStore;
  }
  // 返回栈顶元素
  peek() {
    return this.dataStore[this.top - 1];
  }

  clear() {
    this.dataStore.length = this.top = 0;
    return this.dataStore;
  }

  len() {
    return this.top;
  }
}

const printIn = (v: string) => console.log(v);

// 测试结果
// length: 3
// Bryan
// The popped element is: David,Raymond
// undefined
// Cynthia
// length: 0
// undefined
// Clayton
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
printIn("length: " + s.len());
printIn(s.peek());
var popped = s.pop();
printIn("The popped element is: " + popped);
printIn(s.peek());
s.push("Cynthia");
printIn(s.peek());
s.clear();
printIn("length: " + s.len());
printIn(s.peek());
s.push("Clayton");
printIn(s.peek());
