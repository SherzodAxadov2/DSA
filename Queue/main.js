class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        let node = new Node(value)
        this.first = node
        this.last = node
        this.length = 1
    }

    enqueue(value) {
        let node = new Node(value)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }

        this.length++
        return this
    }

    dequeue() {
        let temp = this.first
        if (!this.first.next) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            temp.next = null
        }

        this.length--
        return temp
    }
}

const myQueue = new Queue(2)