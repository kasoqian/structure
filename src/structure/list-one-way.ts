// 单向链表

// 心得：链表主要通过next来获取当前位置
// 通过next的移动，对数据进行增删查改
export class node {
  element: any;
  next: any;

  constructor(element: any, next?: any) {
    this.element = element;
    this.next = next;
  }
}

export class LList {
  private head = new node("head");

  // 查找item
  find(item: any) {
    let curNode = this.head;
    //没找到的时候，切换接到到下一个
    while (curNode.element != item) {
      curNode = curNode.next as any;
    }
    return curNode;
  }

  // 插入item
  insert(newElement: any, item: any) {
    let newNode = new node(newElement);
    // 找到item这个节点
    let current = this.find(item);
    // 将当前的next切换到newNode上，保证链表的持续性
    newNode.next = current.next;
    // 将新node连到当前的node上，把整体连起来
    current.next = newNode;
  }

  // 添加item
  push(newElement: any) {
    let newNode = new node(newElement);

    let curNode = this.head;

    while (!(typeof curNode.next === "undefined")) {
      curNode = curNode.next;
    }

    curNode.next = newNode;
  }

  // 展示所有的node上的element
  display() {
    let curNode = this.head;
    while (!(curNode === null)) {
      if (curNode) {
        console.log(curNode.element);
        curNode = curNode.next;
      } else {
        break;
      }
    }
  }

  // 移除某一node
  remove(item: any) {
    let curNode = this.head;
    curNode.next = this.find(item);
    curNode.next = curNode.next.next;
  }

  // 移除最后一个node
  pop() {
    let curNode = this.head;

    while (curNode.next.next != null) {
      curNode = curNode.next;
    }
    curNode.next = null;
  }
}

var cities = new LList();
// insert
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.push("test");
cities.remove("Conway");
cities.pop();
cities.display();
