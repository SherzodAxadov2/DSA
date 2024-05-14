class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        let node = new Node(value)
        this.top = node
        this.length = 1
    }

    push(value) {
        let node = new Node(value)
        if (!this.top) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }

        this.length++
        return this
    }

    pop() {
        if (!this.top) return undefined
        let temp = this.top
        this.top = temp.next
        temp.next = null

        this.length--
        return temp
    }
}

const myStack = new Stack(2)

myStack.push(3)
myStack.push(4)
console.log(myStack)