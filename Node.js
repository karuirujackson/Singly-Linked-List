//Node.js
class Node {
    constructor(data) {
        this.data = data;
        this.netx = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of a Node class')
        }
    }
    
    getNextNode() {
        return this.next;
    }
}

module.exports = Node;