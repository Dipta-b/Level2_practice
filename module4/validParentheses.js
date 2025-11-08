class Stack {
    constructor() {
        this.items = []
    }
    push(value) {
        this.items.push(value)
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        console.log(this.items)
    }
}

const bracketChacker = (str) => {

    const stack = new Stack();
    const bracketNap = {
        ")": "(",
        "}": "{",
        "]": "[",
    }
    console.log(stack)
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "(" || char === "{" || char === "[") {

            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.isEmpty() || stack.pop() !== bracketNap[char]) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(bracketChacker(" )"))