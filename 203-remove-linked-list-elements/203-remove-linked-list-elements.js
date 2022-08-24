/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    let curr = head;
    
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        }
        
        if (curr?.next?.val !== val) {
            curr = curr.next;
        }
    }
    
    while (head?.val === val) {
        head = head.next;
    }
    
    return head;
};