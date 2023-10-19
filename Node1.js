/*class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
    setNextNode (node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be an instance of Node')
        }
    }
    getNextNode () {
        return this.next;
    }
};
const firstNode = new Node('I am an instance of a Node');
const secondNode = new Node('I am the next Node');
firstNode.setNextNode(secondNode);

//console.log(firstNode);
console.log(firstNode.getNextNode());


module.exports = Node;*/




/*
class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
    setNextNode (node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be an instance of Node')
        }
    }
    getNextNode () {
        return this.next;
    }
};

const oldest = new Node('John');
const middle = new Node('Jacob');
const youngest = new Node('Jingleheimer');

youngest.setNextNode(middle);
middle.setNextNode(oldest);

let currentSibling = youngest;
let oldestName = '';
while(currentSibling !== null) {
  oldestName= currentSibling.data;
  currentSibling= currentSibling.getNextNode();
}

console.log(`There goes ${oldestName} Schmidt!`);

*/


/*
const LinkedList = require('./LinkedList');
const testLinkedList = require('./testLinkedList.js');
const nthLastNode = (linkedList, n) => {
    let current = null;
    let tailSeeker = linkedList.head;
    let count = 0;
    while (tailSeeker) {
        tailSeeker = tailSeeker.next;
        if (count >= n) {
            if(!count) {
                current = linkedList.head;
            }
            current = current.next;
        }
        count++
    }
    return current;
}

console.log(nthLastNode(testLinkedList, 4));
module.exports = nthLastNode;

*/

const generateTestLinkedList = require('./generateTestLinkedList');

const findMiddle = linkedList => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  // As long as the end of the list is not reached
  while (fast !== null) {
        // Move the fast pointer at least one step
        fast = fast.getNextNode();
        // If it isn't at the end of the list
        if (fast !== null) {
            // Move both pointers forward once
            fast = fast.getNextNode();
            slow = slow.getNextNode();
        }
    }
    // At this point, the slow pointer is in the middle
    return slow;
};

// Test your function yourself:
console.log(findMiddle(generateTestLinkedList(7)));

// Leave this so that we can test your code:
module.exports = findMiddle;