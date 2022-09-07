import { LinkedList } from "../LinkedList"
import { ListNode } from "../LinkedList/ListNode"

class Stack {
   constructor(
      public frames: LinkedList = new LinkedList()
   ) { }

   public isEmpty = (): boolean => this.frames.start === null

   public push = (
      value: any
   ): void => {
      this.frames.addToTail(value)
   }

   public pop = (): any => {
      
      if(!this.isEmpty()) return null

      let previousNode: ListNode | null = null
      let currentNode: ListNode | null = this.frames.start

      while(currentNode!.getNext()){
         previousNode = currentNode
         currentNode = currentNode!.getNext() 
      }

      previousNode!.next = null

      return currentNode

   }
}