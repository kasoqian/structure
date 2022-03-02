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
    this.dataStore = this.dataStore
      .reduce((result: any, cur: any) => {
        if (!result[cur.importance]) {
          result[cur.importance] = [];
          result[cur.importance].push(cur);
        }
        return result;
      }, [])
      .reduce((result: any, cur: any) => {
        cur.map((e: any) => result.push(e));
        return result;
      }, []);
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
