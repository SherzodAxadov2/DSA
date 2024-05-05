class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        let newNode = new Node(value)

        if (this.head) {
            this.tail.next = newNode
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop() {
        if (!this.head) return undefined // for 0 item
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null

        this.length--

        if (!this.length) {
            this.head = null
            this.tail = null
        }

        return temp
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        console.log('temp: ', temp)
        this.length--

        if (!this.length) this.tail = null

        return temp
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }
}

function test() {
    let myLinkedList = new LinkedList(7);
    // myLinkedList.pop()
    // myLinkedList.unshift(8)
    myLinkedList.shift()

    console.log(myLinkedList)

    // myLinkedList.getHead();
    // myLinkedList.getTail();
    // myLinkedList.getLength();
    // myLinkedList.printList();
}

test()