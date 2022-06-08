import { ListNode } from "./ListNode.js";

export class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
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

  addLast(item) {
    let node = new ListNode(item);

    //O(1)
    if (this.isListEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  addFirst(item) {
    let node = new ListNode(item);

    //O(1) repoint to previous node
    if (this.isListEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let previous_first_node = this.head;
      this.head = node;
      this.head.next = previous_first_node;
    }
  }

  getLast() {
    //  Tail is set in the initial linked list
    return this.tail;
  }

  getFirst() {
    //  Get the head of the list (o(1) constant complexity)
    return this.head;
  }

  isListEmpty() {
    return this.head == null;
  }

  indexOf(value) {
    let node = this.head;
    let index = 0;
    while (node) {
      //    Once there are no next nodes left
      //    - the end of the loop is met
      //    No more nodes to traverse

      if (node.data == value) {
        return index;
      }
      node = node.next;
      index++;
    }

    //  No Elements left in the list to check
    return -1;
  }

  contains(value) {
    return this.indexOf(value) != -1;
  }

  removeFirst() {
    if (!this.isListEmpty()) {
      let second = this.head.next;
      //  Removing the object from the head when unlinking
      this.head = null;
      this.head = second;
    }
  }

  removeLast() {
    if (!this.isListEmpty()) {
      let previousNode = this.getPrevious(this.tail);
      this.tail = null;
      this.tail = previousNode;
      this.tail.next = null;
      return this.tail;
    }

    return -1;
  }

  getPrevious(lastNode) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.next == lastNode) {
        return currentNode;
      }

      //  Goes to the next node
      currentNode = currentNode.next;
    }
    return -1;
  }

  printArray() {
    let node = this.head;

    while (node != null) {
      console.log(node?.data);
      node = node.next;
    }
  }

  reverse() {
    if (this.isListEmpty()) {
      return;
    }

    let previous = this.head;
    let current = this.head.next;
    while (current != null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.tail = this.head;
    this.tail.next = null;
    this.head = previous;

    return this.head;
  }
}
