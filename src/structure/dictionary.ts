// 字典
// 注意：字典的本身不是一个对象，而是数组，数组内包含若干个键值对
// "kasoqian":"1899576826X"
class Dictionary {
  private dataStore = [];

  add(key: string, value: string) {
    this.dataStore[key] = value;
  }

  remove(key) {
    delete this.dataStore[key];
  }

  update(key: string, value: string) {
    this.dataStore[key] = value;
  }

  find(key: string) {
    return this.dataStore[key];
  }

  display() {
    for (let key of Object.keys(this.dataStore)) {
      console.log(`${key}---->${this.dataStore[key]}`);
    }
  }
  // 辅助方法
  count() {
    return Object.keys(this.dataStore).length;
  }

  claer() {
    this.dataStore = [];
  }
}

const person = new Dictionary();

person.add("name", "kasoqian");
person.add("age", "24");
person.add("sex", "fmale");
console.log(person.find("sex"));
person.remove("sex");
person.update("name", "大帅逼");
person.display();
// 辅助方法
console.log(person.count());
