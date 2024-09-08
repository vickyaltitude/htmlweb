class PriorityQueue{
    constructor(){
        this.list = [];
    }
    enqueue(vertex,priority){
        this.list.push({vertex,priority});
        this.sort()
    };
    dequeue(){
        return this.list.shift()
    }
    sort(){
        this.list.sort((a,b)=>{
            return a.priority - b.priority;
        })
    }
}
class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdges(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight})
    }
    dijkstras(start,end){
        let nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        for(let vertex in this.adjacencyList){
            if(vertex == start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }
    }
}
let newGraph = new WeightedGraph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");
newGraph.addEdges("A","B",4)
newGraph.addEdges("A","C",2)
newGraph.addEdges("B","E",3)
newGraph.addEdges("C","D",2)
newGraph.addEdges("C","F",4)
newGraph.addEdges("D","E",3)
newGraph.addEdges("D","F",4)
newGraph.addEdges("E","F",4)
console.log(newGraph)