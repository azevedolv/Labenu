import { ListNode } from "../LinkedList/ListNode"

class Queue {
   constructor(
      public items: any[] = []
   ) { }

   public isEmpty = (): boolean => this.items.length === 0

   public enqueue = (
      value: any
   ): void => {
      const index = this.items.length
      this.items[index] = value
   }

   public dequeue = (): ListNode | null => {

      const removedItem = this.items[0]

      for (let i = 0; i < this.items.length; i++) {
         this.items[i] = this.items[i + 1];
      }

      this.items.length--

      return removedItem
   }
}