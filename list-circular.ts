// 循环链表
export class node {
  element: any;
  next: any;
  previous: any;

  constructor(element: any) {
    this.previous = null;
    this.element = element;
    this.previous = null;
  }
}

export class LList {
  private head = new node("head");

  insert(newElement, item) {
    const newNode = new node(newElement);
    let curNode = this.head;

    while (curNode.element != item) {
      curNode = curNode.next;
    }
    newNode.previous = curNode;
    newNode.next = curNode.next ? curNode.next : this.head;
    curNode.next = newNode;
  }

  push(newElement) {
    const newNode = new node(newElement);
    let curNode = this.head;

    while (curNode.next != null) {
      curNode = curNode.next;
    }

    curNode.next = newNode;
    newNode.previous = curNode;
    newNode.next = this.head;
  }

  display() {
    let curNode = this.head;

    while (curNode != null) {
      console.log(curNode.element);
      curNode = curNode.next;
    }
  }

  pop() {
    let curNode = this.head;

    while (curNode.next.next != null) {
      curNode = curNode.next;
    }

    curNode.next = this.head;
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
}

// const list = new LList();

// list.push("good");
// list.push("yes");
// list.push("no");
// list.insert("插入数据1", "yes");
// list.insert("插入数据2", "no");
// list.remove("yes");
// list.push("我是啦啦队");
// list.pop();
// list.push("我负责收尾");
// list.display();
