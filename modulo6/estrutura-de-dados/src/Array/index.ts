const labenuGroups: string[] = [
   "Newton",
   "Bouman", 
   "Sagan",
   "Hamilton",
   "Julian", 
   "Melo",
   "Turing",
   "Jackson",
   "Tang",
   "Dumont "
]


// const matriz = [
//    [1,0],
//    [0,1],
//    [0,0]
// ]

// for(let linha of matriz){
//    for(let coluna of linha){
//       // lógica
//    }
// }


const customSplice = (
   array: any[],
   index: number,
   deleteCount: number = 1
): any => {
   const removedItems = []

   for (let i = index; i < index + deleteCount; i++) {
      removedItems.push(array[i])
   }

   for (let i = index; i < array.length; i++) {
      array[i] = array[i + deleteCount]
   }

   array.length -= deleteCount

   return removedItems
}

const item = customSplice(labenuGroups, 1, 3)

// console.log({ labenuGroups, item });