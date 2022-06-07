export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    //  o(n) - looping through the list to get count
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      //    Once there are no next nodes left
      //    - the end of the loop is met
      //    No more nodes to traverse
      node = node.next;
    }
    //  Count will be returned at the end of the loop
    return count;
  }

  clear() {
    //  De-references the head making the linked list empty
    //  o(1)
    this.head = null;
  }

  getLast() {
    //  o(n) have to go through the whole list
    let lastNode = this.head;
    if (lastNode) {
      //    Similar logic to size
      //    Loop through the list until no more
      //    next nodes left
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    //  Get the head of the list (o(1) constant complexity)
    return this.head;
  }
}
