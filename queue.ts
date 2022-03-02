// 栈是一个先进先出的数据结构
// 以下定义了一个队列类
// 入队列，出队列，头队列，尾队列，清空队列 5种方法
class Queue {
  private dataStore: any[] = [];

  push(e: any) {
    this.dataStore.push(e);
  }

  pop() {
    this.dataStore.pop();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    const [backData] = [...this.dataStore];
    return backData;
  }

  claer() {
    this.dataStore = [];
  }
}
// 优先队列算法
type data = {
  importance: number;
  content: string;
};

class GreatQueue {
  private dataStore: data[] = [];

  push(e: data) {
    this.dataStore.push(e);
    this.sort();
  }

  sort() {
    this.dataStore.sort(
      (e1: data, e2: data) => e1.importance - e2.importance,
    );
  }

  data() {
    return this.dataStore;
  }
}

const G = new GreatQueue();
G.push({ importance: 3, content: "周润发" });
G.push({ importance: 1, content: "成龙" });
G.push({ importance: 0, content: "李小龙" });
G.push({ importance: 2, content: "周星驰" });
G.push({ importance: 0, content: "范冰冰" });
console.log(G.data());
