// 普通非平衡二叉树
class node {
  data: any;
  left: any;
  right: any;
  constructor(element: number) {
    this.data = element;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  private root = new node(14);

  insert(element) {
    let newNode = new node(element);

    var current = this.root;
    var parent;

    while (current) {
      parent = current;
      if (element < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = newNode;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = newNode;
          break;
        }
      }
    }
  }

  display() {
    return this.root;
  }
}

const tree = new Tree();

tree.insert(12);
tree.insert(13);
tree.insert(14);
tree.insert(11);
tree.insert(20);
console.log(JSON.stringify(tree.display()));
