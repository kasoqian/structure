// 集合
class Collection {
  private dataStore: any[] = [1];

  // 并集
  union(element: any[]) {
    let data = new Set([...element, ...this.dataStore]);
    this.dataStore = [...data.keys()];
  }

  // 差集
  difference(element: any[]) {
    const data1 = this.dataStore.filter(v => {
      if (!element.some(i => i === v)) return v;
    });

    const data2 = element.filter(v => {
      if (!this.dataStore.some(i => i === v)) return v;
    });

    this.dataStore = [...data1, ...data2];
  }
  // 交集
  intersect(element: any[]) {
    this.dataStore = this.dataStore.filter(v => {
      if (element.some(i => i === v)) return v;
    });
  }

  showData() {
    return this.dataStore;
  }
}

const collection = new Collection();
collection.union([1]);
collection.union([2]);
collection.union([3, 4, 5, 8, 9]);
collection.difference([9, 10]);
collection.intersect([4, 5, 10, 11]);

console.log(collection.showData());
