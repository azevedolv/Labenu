import { ListNode, node } from "./ListNode";

export class LinkedList {
   constructor(
      public start: ListNode | null = null
   ) { }

   public appendToTail(value: number) {
      if (!this.start) {
         this.start = new ListNode(value);
      } else {
         let node: ListNode = this.start;
         while (node && node.getNext() !== undefined) {
            node = node.getNext()!;
         }
         node.setNext(new ListNode(value));
      }
   }

   public addToTail = (
      value: any
   ): void | undefined => {

      if (!this.start) {
         this.start = new ListNode(value)
         return
      }

      let currentNode = this.start

      while (currentNode.next !== null) {
         currentNode = currentNode.next
      }

      currentNode.next = new ListNode(value)

   }

   public find = (
      value: any
   ): ListNode | null => {

      let currentNode = this.start

      while (
         currentNode !== null &&
         currentNode.value !== value
      ) {
         currentNode = currentNode.next
      }

      return currentNode
   }
}

const list = new LinkedList()

list.addToTail("segunda")
list.addToTail("terça")
list.addToTail("quarta")
list.addToTail("quinta")


// console.log(JSON.stringify(list.find("segunda"), null, 2))
// console.log(JSON.stringify(list.find("quarta"), null, 2))
// console.log(JSON.stringify(list.find("quinta"), null, 2))
// console.log(JSON.stringify(list.find("sexta"), null, 2))