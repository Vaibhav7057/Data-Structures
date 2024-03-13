class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addfirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  addEnd(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.length++;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;
  }
  addAtIndex(data, index) {
    if (index < 0 || index > this.length) {
      console.log("invalid index");
      return;
    }
    if (index == 0) {
      this.addfirst(data);
      return;
    }
    if (index == this.length) {
      this.addEnd(data);
      return;
    }
    let newNode = new Node(data);
    let curr = this.head;
    for (let i = 1; i < index; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.length++;
  }
  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  removeFirst() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp = null;
    this.length--;
    return temp;
  }
  removeLast() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    if (!this.head.next) {
      let removed = this.head.data;
      this.head = null;
      this.length--;
      return removed;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    let removed = curr.next.data;
    curr.next = null;
    this.length--;
    return removed;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.length) {
      console.log("invalid index");
      return;
    }
    if (index == 0) {
      this.removeFirst();
      return;
    }
    if (index == this.length) {
      this.removeLast();
      return;
    }
    let curr = this.head;
    for (let i = 1; i < index; i++) {
      curr = curr.next;
    }
    let removed = curr.next.data;
    let delNode = curr.next;
    curr.next = curr.next.next;
    delNode = null;

    this.length--;
  }
}
