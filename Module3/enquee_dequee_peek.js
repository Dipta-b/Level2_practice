
class Stack {
    constructor() {
        this.items = []
    }
    enqueue(value) {
        this.items.push(value)
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        console.log(this.items)
    }
}

const stack = new Stack();
stack.enqueue(10);
stack.enqueue(20);
stack.enqueue(30);
stack.enqueue(40);
stack.print()
stack.dequeue()
stack.print()
stack.peek()
console.log(stack.peek())