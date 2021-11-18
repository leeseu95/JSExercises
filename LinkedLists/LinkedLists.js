/*Linked Lists Personal Exercise*/

function Node(value) { //Constructor for a node
    this.value = value;
    this.next = null;
}

function LinkedList() { //Constructor for a LL
    this.head = null;
}

LinkedList.prototype.printList = function() {
    for(let i = 0; i < this.length; i ++) {
        console.log(this[i]);
    }
}

LinkedList.prototype.insert = function(value) {
    var head = this.head;

    if(head == null) {
        this.head = new Node(value);
        return 0;
    }
    var currentNode = head;
    while(currentNode.next != null) {
        currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
}

LinkedList.prototype.prepend = function(value) {
    var newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
}

LinkedList.prototype.delete = function(value) {
    if (this.head == null) {
        return;
    }
    if (this.head.value == value) {
        this.head = this.head.next;
        return;
    }

    var currentNode = this.head;
    while(currentNode.next != null) {
        if(currentNode.next.value == value) {
            currentNode.next = currentNode.next.next;
            return;
        }
        currentNode = currentNode.next;
    }
    return false;
}

var ll = new LinkedList();
ll.insert(3);
ll.insert(5);
ll.insert(7);
console.log(ll.head);

ll.prepend(6);
console.log(ll.head);

ll.delete(5);
console.log(ll.head);
