class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root;
      while(true) {
          if (value === currentNode.value) {
              return this;
          }
          if (value < currentNode.value) {
            // Go left
            if (currentNode.left === null) {
                currentNode.left = newNode
                return this;
            }
            currentNode = currentNode.left
          } 
          if (value > currentNode.value) {
            //Go right
            if (currentNode.right === null) {
              currentNode.right = newNode
              return this;
            }
            currentNode = currentNode.right
          }
      }
    }
  } 
  lookup(value) {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value === currentNode.value) {
          return currentNode; // Found it
      } else if (value < currentNode.value) {
        currentNode = currentNode.left; // Go left
      } else {
        currentNode = currentNode.right; // Go right
      }
    }
    return null; // Not found
  }


  remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while (currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!

          //Option 1: No right child:
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              //if parent > current value, make current left child a child of parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;

                //if parent < current value, make left child a right child of parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }

            //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if (parentNode === null) {
              this.root = currentNode.right;
            } else {
              //if parent > current, make right child of the left the parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;

                //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }

            //Option 3: Right child that has a left child
          } else {
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while (leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }

            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;

            if (parentNode === null) {
              this.root = leftmost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
          return true;
        }
      }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let queue = [];
    let list = [];

    // Start with enqueuing by making our currentNode first item in the queue;
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  breadthFirstSearchRecursion(queue, list) {
    if (!queue.length) {
      return list;
    }
    
    let currentNode = this.root;
    currentNode = queue.shift();
    list.push(currentNode.value)
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }

    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearch(queue, list)
  }

  //* When you traverse in-order you always get a sorted array/list
  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, []);
  }

  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, []);
  }
  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, []);
  }

  validateBST() {
    function helper(node, min, max) {
      if (!node) return true;
      if (node.val <= min || node.val >= max) return false;

      return (
        helper(node.left, min, node.val) &&
        helper(node.right, node.val, max)
      );
    }

    return helper(this.root, -Infinity, Infinity)
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }
  
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }

  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}




const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(20));
// console.log(tree.breadthFirstSearch())
// console.log(tree.breadthFirstSearchRecursion([tree.root], []))
// console.log(tree.depthFirstSearchInOrder());
// console.log(tree.depthFirstSearchPreOrder());
// console.log(tree.depthFirstSearchPostOrder());
console.log(tree.validateBST())
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}