class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this.root
        }

        let temp = this.root

        while (true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value < temp.value) {
                if (!temp.left) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (!temp.right) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    contains(value) {
        if (!this.root) return false
        let temp = this.root

        while (temp) {
            if (temp.value === value) return true
            else if (value < temp.value) {
                temp = temp.left
            } else {
                temp = temp.right
            }
        }

        return false
    }

    minValue() {
        if (!this.root) return undefined

        let temp = this.root
        while (temp.left) {
            temp = temp.left
        }

        return temp.value
    }

    minValueNode(currentNode) {
        while (currentNode.left) {
            currentNode = currentNode.left
        }

        return currentNode.value
    }

    BFS() {
        let currentNode = this.root
        let queue = []
        let results = []
        queue.push(currentNode)

        while (queue.length) {
            currentNode = queue.shift()
            results.push(currentNode.value)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }

        return results
    }
}

let myTree = new BST()

myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)

myTree.insert(52)
myTree.insert(82)

// console.log(myTree.contains(18))
// console.log(myTree.minValue())
// console.log(myTree.minValueNode(myTree.root.right))
console.log(myTree.BFS())