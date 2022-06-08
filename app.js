import { LinkedList } from "./LinkedList.js";
import { ListNode } from "./ListNode.js";
//  Separate Concerns of Linked List Objects into other classes

//  Init the linked list
let list = new LinkedList(new ListNode(10));

list.addLast(20);
list.addLast(30);

list.reverse();

list.printArray();
