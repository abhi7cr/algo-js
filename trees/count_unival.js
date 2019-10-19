
//PROBLEM STATEMENT: COUNT UNIVAL TREES

//Complexity analysis (Worst case) - Time: O(N), Space: O(N) - call stack memory for a depth of N


 //       0
  //    1   0
  //      1   0      
  //    1   1
  //
  //

// Answer for above: 5 (4 leaf nodes + 1 unival subtree (1,1,1))


function TreeNode(v) {
  this.val = v
  this.left = null
  this.right = null
}

const constructTree = () => {
  let root = new TreeNode(0)
  let a = new TreeNode(1)
  let b = new TreeNode(0)
  let c = new TreeNode(1)
  let d = new TreeNode(0)
  let e = new TreeNode(1)
  let f = new TreeNode(1)
  
  root.left = a
  root.right = b
  b.left = c
  b.right = d
  c.left = e
  c.right = f
  return root
}

const countUnival = root => {
  // Base case
  if (root === null) return [0, true]
  
  // Recursive case
  let left = countUnival(root.left)
  let right = countUnival(root.right)
  if (left[1] && right[1]) {
      if ((root.left && root.val !== root.left.val) ||
        (root.right && root.val !== root.right.val)) {
        return [left[0]+right[0], false]
    }
    else return [left[0]+right[0]+1, true]
  }
  return [left[0]+right[0], false]
}

const root = constructTree()
console.log(countUnival(root))