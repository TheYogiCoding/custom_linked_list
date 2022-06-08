import { LinkedList } from "./LinkedList.js";
import { ListNode } from "./ListNode.js";
//  Separate Concerns of Linked List Objects into other classes

//  Init the linked list
let list = new LinkedList(new ListNode(10));

list.addLast(20);
list.addLast(30);

// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());

// list.addFirst(5);
// console.log(list.getFirst());

//  Linked Lists are o(n) - respective of the size of the linked list
//  To add/remove from the list is o(1) as its constant

// console.log(list.indexOf(20));

//console.log(list);

list.reverse();

list.printArray();
