class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }

    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
            return true
        }
        return false
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return undefined
        while(this.adjacencyList[vertex].length){     // remove all edges then delete it
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge(temp, vertex)
        }
        delete this.adjacencyList[vertex]
        return this

    }
}

const myGraph = new Graph()
myGraph.addVertex( 'A')
myGraph.addVertex( 'B')

myGraph.addEdge('A', 'B')

myGraph.addVertex( 'C')
myGraph.addEdge('C', 'B')
myGraph.addEdge('C', 'A')
myGraph.removeEdge('B', 'A')

myGraph.removeVertex('B')

