class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top++;
  }

  isEmpty() {
    return this.top == 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.top - 1];
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is underflow !";
    }
    this.top--;
    return this.data.pop();
  }
}
