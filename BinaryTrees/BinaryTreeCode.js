/*************************************
 * Code practice for binary search. Taken help from 
 * https://gist.github.com/lumrachele/572ddd6ff39b80b6c69735b4b9073661
 * 
 *                  20
 *          9               25
 *      5       12      23                   
 *          11      14
 *               13     15
 ****************************************/

function Node(value) { //Constructor for a node 
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() { //Cosntructor for a BST
    this.root = null;
}

BinarySearchTree.prototype.insert = function(value) {
    var root = this.root;

    //First case scenario, if the root is empty, make the first value inserted, the root of the tree;
    if(!root) {
        this.root = new Node(value);
        return;
    }

    //Otherwise, insert the new value as a node into the tree, traverse through it to place it at the correct part
    var currentNode = root;
    var newNode = new Node(value);

    while(currentNode !== null) {
        if(value < currentNode.value) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left; //If the node does have a left child already, we make the current node the left child
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

BinarySearchTree.prototype.getNodeByVal = function(value) {
    var currentNode = this.root;

    while(currentNode) { //While the current node is existent, we'll traverse through the tree to find it
        if(value === currentNode.value) {
            return currentNode;
        }

        if(value < currentNode.value) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }

    return null;
}

BinarySearchTree.prototype.findIOS = function(nodeVal) {

    if(!nodeVal) {
        return null; //If nodeVal is null;
    }
    //If the node has a right child then return the child
    if(nodeVal && nodeVal.right) {
        return nodeVal.right;
    }

    //If the node does not have a right child, then we need to check if the parent value is greater or lower
    //if the parent value is greater, the GREATEST parent would be the IOS, if the first parent
    //is lower, then the node has no IOS
    if(!nodeVal.right && (nodeVal.parent < nodeVal.value)) {
        return null;
    }

    if(!nodeVal.right && nodeVal.parent) {
        var currentNode = nodeVal;
        var resultNode = null;
        while(currentNode.parent) {
            if(currentNode.value < currentNode.parent.value) {
                resultNode = currentNode.parent;
            }
            currentNode = currentNode.parent;
        }
        return resultNode;
    }
}

//Delete Function (Separate from the BST In Order Successor function)
BinarySearchTree.prototype.delete = function(nodeVal) {
    var currentNode = this.root;

    while(currentNode) {
        if(currentNode.value === nodeVal) {
            break; //Otherwise we want to be at the Node of the node we want to delete so we'll break
        }
        if(nodeVal < currentNode.value) {
            currentNode = currentNode.left; //Search left if value is lower than current Node
        } else {
            currentNode = currentNode.right; //Search right if value is higher than current node
        }
    }
    if(!currentNode) {
        return null; //This means that the node we're trying to delete is not there
    }

    //First Case scenario (if the node we want to delete is the leaf), then delete the node
    if(!currentNode.left && !currentNode.right) {
        var parentNode = currentNode.parent;
        if(parentNode.left == currentNode) { //If the left leaf of the parent is our current node
            parentNode.left = null;
        } else {
            parentNode.right = null;
        }
    }

    //Second Case Scenario (if the node we want to delete only has 1 child)
    if((!currentNode.left && currentNode.right) || (currentNode.left && !currentNode.right)) {
        var parentNode = currentNode.parent;
        if(currentNode.left) { //If the left leaf is the one we need to connect ot the parent
            if(parentNode.right == currentNode) { //If the current node is right leaf of the parent
                parentNode.right = currentNode.left; 
            } else if (parentNode.left == currentNode) { //If the current nodei s left leaf of the parent
                parentNode.left = currentNode.left;
            }
        } else if (currentNode.right) { //If the irght leaf is the one we need to connect to the parent;
            if(parentNode.right == currentNode) { //If the current node is right leaf of the parent
                parentNode.right = currentNode.right; 
            } else if (parentNode.left == currentNode) { //If the current nodei s left leaf of the parent
                parentNode.left = currentNode.right;
            }
        }
    }

    //Third Case scenario (if the node has two leaves), we need to get the lowest value on the right subtree
    if(currentNode.left && currentNode.right) {
        var tempNode = currentNode.right;
        while(tempNode.left) {
            tempNode = tempNode.left;
        }

        //Once we have the lowest value on the right subtree, we have to connect the left and right of currentNode to this temp Node we have
        if(tempNode.parent.left == tempNode) { //We delete the node we're on from it's parent
            tempNode.parent.left = null;
        } else {
            tempNode.parent.right = null;
        }

        //Link the left and right leaves to the leaves that the node we want to delete has
        if(currentNode.left != tempNode) { //Have to make sure that it doesnt link to itself
            tempNode.left = currentNode.left;
        }
        if(currentNode.right != tempNode) {
            tempNode.right = currentNode.right;
        }

        //Set the new left and right leaves to have the correct parents;
        if(tempNode.left) {
            tempNode.left.parent = tempNode;
        }
        if(tempNode.right) {
            tempNode.right.parent = tempNode;
        }

        //If the node is root, we have to set it as the root and re-connect it with the parent
        if(currentNode == this.root) { //If the node was the root, we have to place this as the root
            this.root = tempNode;
            tempNode.parent = null;
        } else {
            tempNode.parent = currentNode.parent;
            if(currentNode.parent.left == currentNode) { //Set the parent of the node we're deleting to our new node
                currentNode.parent.left = tempNode;
            } 
            if(currentNode.parent.right == currentNode) {
                currentNode.parent.right = tempNode;
            }
        }
        // console.log(tempNode);
    }

    return true;
}


// BinarySearchTree.prototype.inOrderTraversalPrint = function(nodeParam) {
//     if(nodeParam) {
//         console.log(nodeParam.value);
//         this.inOrderTraversalPrint(nodeParam.left);
//         this.inOrderTraversalPrint(nodeParam.right);
//     }
// }

BinarySearchTree.prototype.breadthFirstTraversal = function() {
    var result = [];
    var currentNode = this.root;
    var queue = [currentNode];
    while(currentNode = queue.shift()) {
        result.push(currentNode.value);
        currentNode.left && queue.push(currentNode.left);
        currentNode.right && queue.push(currentNode.right);
    }
    return result;
}

BinarySearchTree.prototype.inOrderTraversalPrint = function() {
    var result = []; //Create the array in which we will be saving our values
    var currentNode = this.root;
    var traverseTree = function(nodeParam) {
        nodeParam.left && traverseTree(nodeParam.left);
        result.push(nodeParam.value);
        nodeParam.right && traverseTree(nodeParam.right);
    }
    traverseTree(currentNode);
    return result;
}

BinarySearchTree.prototype.postOrderTraversalPrint = function() {
    var result = []; //Create array in which we will be saving our values
    var currentNode = this.root; //Start in our root
    var traverseTree = function(nodeParam) {
        nodeParam.left && traverseTree(nodeParam.left);
        nodeParam.right && traverseTree(nodeParam.right);
        result.push(nodeParam.value);
    }
    traverseTree(currentNode);
    return result;
}

BinarySearchTree.prototype.preOrderTraversalPrint = function() {
    var result = [];
    var currentNode = this.root; //Same logic as post/inorder traversal
    var traverseTree = function(nodeParam) {
        result.push(nodeParam.value);
        nodeParam.left && traverseTree(nodeParam.left);
        nodeParam.right && traverseTree(nodeParam.right);
    }
    traverseTree(currentNode);
    return result;
}

//Testing the code
//Build our tree and insert the values needed
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(5);
bst.insert(25);
bst.insert(12);
bst.insert(11);
bst.insert(14);
bst.insert(23);
bst.insert(13);
bst.insert(15);

//Testing of traversal prints
// console.log(bst.inOrderTraversalPrint())
// console.log(bst.breadthFirstTraversal());
// console.log(bst.postOrderTraversalPrint());
// console.log(bst.preOrderTraversalPrint());

//Test Delete of a node in tree that has no leaves
// console.log(bst.delete(14));
// console.log(bst.getNodeByVal(14));
// console.log(bst.getNodeByVal(12));

//Test delete of a node in tree that has 1 leaf
// console.log(bst.delete(25));
// console.log(bst.getNodeByVal(25));
// console.log(bst.getNodeByVal(20));

//Test delete of a node in tree that has 2 leaves
// console.log(bst.delete(20));
// console.log(bst.getNodeByVal(20));
// console.log(bst.getNodeByVal(23));
// console.log(bst.root);

//Test 2 of deleting a node in tree that has 2 leaves
// console.log(bst.delete(12));
// console.log(bst.getNodeByVal(12));
// console.log(bst.getNodeByVal(9));
// console.log(bst.root);

//Test 3 of deleting a node in tree that has 2 leaves (deeper)
// console.log(bst.delete(12));
// console.log(bst.getNodeByVal(12));
// console.log(bst.getNodeByVal(13));
// console.log(bst.root);

//Testing of finding IOS 
// var test = bst.getNodeByVal(9);
// var IOSTest = bst.findIOS(test);
// console.log(IOSTest);

//Testing of finding IOS through its greatest parent
// var test2 = bst.getNodeByVal(14);
// var IOSTest2 = bst.findIOS(test2);
// console.log(IOSTest2);