import { LinkedList } from "./LinkedList.js";
import { ListNode } from "./ListNode.js";
//  Separate Concerns of Linked List Objects into other classes

//  Setup Nodes for the Linked List
let node1 = new ListNode(8);
let node2 = new ListNode(20);
let node3 = new ListNode(19);

//  Attach 8 => 20 => 19 (node 1 we will make the
//  head and node 3 will be the tail)
node1.next = node2;
node2.next = node3;

//  Init the linked list - node 1 is head
let list = new LinkedList(node1);

console.log(list.head.next.data); //returns 20 (Node 2 is next to the head)
console.log(list.head.next.next.data); //returns 19 (Node 3 is next to node 2)

console.log(list.size());

//  Linked Lists are o(n) - respective of the size of the linked list
//  To add/remove from the list is o(1) as its constant
