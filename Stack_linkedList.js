class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(element) {
    let newNode = new Node(element);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  isEmpty() {
    return this.length == 0;
  }
  peek() {
    if (this.isEmpty) {
      return null;
    }
    return this.head.value;
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is underflow !";
    }
    let data = this.head.value;
    this.head = this.head.next;
    let temp = this.head;
    temp = null;
    // delete temp
    this.length--;
    return data;
  }
}
