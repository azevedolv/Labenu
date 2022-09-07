export class ListNode {
   constructor(
      public value: any,
      public next: ListNode | null = null
   ) { }

   public getData = () =>{
      return this.value
   }

   public getNext = () =>{
      return this.next
   }

   public setNext = (next: ListNode) =>{
      return this.next = next
   }
}

export const node = new ListNode("segunda", new ListNode("terça"))