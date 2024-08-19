class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BSS {
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode
        }
        let current = this.root;
        while(true){
            if(current.val == val) return undefined;
            if(val < current.val){
                if(current.left == null){
                    current.left = newNode
                    return this;
                }current = current.left
            }else{
                if(current.right == null){
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }
    contains(val){
           if(!this.root) return false;
           let current = this.root;
           while(current){
            if(current.val < val){
                current = current.right;
            }else if(current.val > val){
                current  = current.left
            }else{
                return true
            }
           }
           return false
    }
}
let newBss = new BSS()
newBss.insert(10)
newBss.insert(11)
newBss.insert(12)
newBss.insert(13)
newBss.insert(14)

newBss.insert(9)
newBss.insert(8)
newBss.insert(7)
newBss.insert(6)
newBss.insert(5)
console.log(newBss)
console.log(newBss.contains(14))