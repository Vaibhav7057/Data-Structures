class Queue {
  constructor() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.data[this.rear] = element;
    this.rear++;
  }
  isEmpty() {
    return this.front == this.rear;
  }
  print() {
    for (let i = this.front; i < this.rear; ++i) {
      console.log(this.data[i]);
    }
  }

  dequeue() {
    if (isEmpty()) {
      throw new Error("Queue underflow");
    }
    let frontElement = this.data[this.front];
    this.front++;
    return frontElement;
  }

  getFront() {
    if (isEmpty()) {
      throw new Error("Queue is Empty!");
    }
    return this.data[this.front];
  }
}
