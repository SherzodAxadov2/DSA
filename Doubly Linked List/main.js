class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        let node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }

    push(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let temp = this.tail
        if (!this.head.next) {
            this.head = null
            this.tail = this.head
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        temp.prev = null

        this.length--
        return temp
    }

    unshift(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }


        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined

        let temp = this.head
        if (!this.head.next) {
            this.head = null
            this.tail = null
        } else {
            this.head = temp.next
            this.head.prev = null
            temp.next = null
        }


        this.length--
        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined

        let temp = this.head
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i++) {
                temp = temp.prev
            }
        }

        return temp
    }
}

let dll = new DoublyLinkedList(10)
dll.push(20)
dll.push(30)

// console.log(dll)
// console.log(dll.pop())