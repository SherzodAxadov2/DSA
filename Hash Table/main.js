class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length   // hash less than length of dataMap
        }
        return hash
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])

        return this
    }

    get(key) {
        let index = this._hash(key)
        if (this.dataMap[index]) {
            let targetArray = this.dataMap[index]
            for (let item of targetArray) {
                if (item[0] === key) return item[1]
            }
        }
        return undefined
    }

    keys() {
        let allKeys = []
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let item of this.dataMap[i]) {
                    allKeys.push(item[0])
                }
            }
        }
        return allKeys
    }
}

let myHashTable = new HashTable()
// console.log(myHashTable._hash('go'))
console.log(myHashTable.set('washers', 60))
console.log(myHashTable.set('bolts', 500))
console.log(myHashTable.get('bolts')) // 500
console.log(myHashTable.keys()) // ['bolts', 'washers']