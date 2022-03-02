// 双向循环链表
export class node {
  element: any;
  next: any;
  previous: any;

  constructor(element: any) {
    this.next = null;
    this.element = element;
    this.previous = null;
  }
}

export class LList {
  private head = new node("head");

  constructor() {
    this.head.previous = this.head;
    this.head.next = this.head;
  }

  // 双向循环链表中不应该有push一说，这里只提供insert方法
  insert(newElement, item) {
    const newNode = new node(newElement);
    let curNode = this.head;

    while (curNode.element != item) {
      curNode = curNode.next;
    }

    newNode.previous = curNode;
    newNode.next = curNode.next;
    curNode.next.previous = newNode;
    curNode.next = newNode;
  }

  remove(item) {
    let curNode = this.head;

    while (curNode.next.element != item) {
      curNode = curNode.next;
    }

    curNode.next = curNode.next.next
      ? curNode.next.next
      : this.head;
    curNode.next.previous = curNode;
  }

  advance(step: number) {
    let curNode = this.head;

    while (step > 0) {
      curNode = curNode.next;
      step--;
    }

    return curNode.element;
  }

  back(step: number) {
    let curNode = this.head;

    while (step > 0) {
      curNode = curNode.previous;
      step--;
    }

    return curNode.element;
  }
}

const list = new LList();

list.insert("good", "head");
list.insert("test", "head");
list.insert("yes", "good");
list.insert("no", "yes");
console.log(list.back(0));
console.log(list.back(1));
console.log(list.back(2));
console.log(list.back(3));
console.log(list.back(4));
console.log(list.back(5));
console.log("------------------");
console.log(list.advance(0));
console.log(list.advance(1));
console.log(list.advance(2));
console.log(list.advance(3));
console.log(list.advance(4));
console.log(list.advance(5));
