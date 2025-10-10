// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
    1 -> 2 -> 4 -> null                1 -> 3 -> 4 -> null
         L1                                  
                                            L2                           

    output = 1 -> 1 -> 2 -> 
*/

function mergeTwoSortedList(list1, list2) {
    let output = new ListNode(-1);
    let currentNode = output;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }

    if (list1 !== null) currentNode.next = list1;
    if (list2 !== null) currentNode.next = list2;

    return output.next // To skip the first node (-1) which is not part of the original lists
}