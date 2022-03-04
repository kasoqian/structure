// 普通非平衡二叉查找树
export class node {
  data: any;
  left: any;
  right: any;
  constructor(element: number) {
    this.data = element;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  private root = new node(14);

  insert(element) {
    let newNode = new node(element);

    let currentNode = this.root;
    let parentNode;

    while (currentNode) {
      parentNode = currentNode;
      if (element < currentNode.data) {
        currentNode = currentNode.left;
        if (currentNode == null) {
          parentNode.left = newNode;
          break;
        }
      }

      if (element >= currentNode.data) {
        currentNode = currentNode.right;
        if (currentNode == null) {
          parentNode.right = newNode;
          break;
        }
      }
    }
  }

  find(element) {
    let currentNode = this.root;

    while (currentNode.data != element) {
      if (element > currentNode?.data) {
        currentNode = currentNode.right;
        if (currentNode == null) {
          break;
        }
      }

      if (element < currentNode?.data) {
        currentNode = currentNode.left;
        if (currentNode == null) {
          break;
        }
      }
    }

    return (
      currentNode ||
      `抱歉，您查找的"${element}"为空或属于非平衡节点。`
    );
  }

  display() {
    return this.root;
  }
}

const tree = new Tree();

tree.insert(12);
tree.insert(14);
tree.insert(13);
tree.insert(14);
tree.insert(11);
tree.insert(20);
// console.log(JSON.stringify(tree.display()));
console.log(tree.find(20));
console.log(tree.find(13));
