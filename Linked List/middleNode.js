function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const middleNode = function (head) {    //head ListNode
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};

const deleteMiddleNode = function (head) {    //head ListNode
    if (!head.next) {
        head = null
        return head
    }
    let slow = head
    let fast = head
    let temp = null

    while (fast && fast.next) {
        temp = slow
        slow = slow.next
        fast = fast.next.next
    }

    temp.next = slow.next

    return head
};

const mergeTwoLists = function (list1, list2) {
    console.log(list1, list2)
    // let temp = list1
    // console.log(list1)

    // console.log(temp)

    // while(temp && temp.next){
    //     temp = list1.next
    // }

};