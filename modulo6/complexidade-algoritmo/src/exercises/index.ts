// Determine a complexidade dos seguintes algoritmos

// - Exercício 1
    const findFirstRecurringCharacter = (input:any)=> {
      const charHashMap:any = {};
      for (const char of input) {
        if (charHashMap[char] === true) {
          return char;
        }
        charHashMap[char] = true;
      }
      return null;
    }; 
    
        
      //   Sendo **n** o tamanho da string `input`, complexidade é O(n)
        
    
// - Exercício 2
    export const func = (
      source: string,
      comparison: string
    ): boolean => {
      if (
        comparison.length > source.length + 1 ||
        comparison.length < source.length - 1
      ) {
        return false;
      }
      let commonCharQuantity = 0;
    
      for (const char of comparison) {
        if (source !== comparison) {
          commonCharQuantity++;
        }
      }
      return (
        commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1
      );
    };
    
      //   Sendo n o tamanho da string `comparison`, complexidade é O(n)
        
    
// - Exercício 3
    

    export const replaceMatrixValue = (
      matrix: number[][],
      rowIndex: number,
      columnIndex: number,
      value: number
    ): void => {
      if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
      ) {
        throw new Error("Fora do intervalo da matriz");
      }
    
      matrix[rowIndex][columnIndex] = value;
    };
    
    //- Resposta : A complexidade é O(1)
        
    
//- Exercício 4
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
   for (let i = 0; i < listOfNumbers.length; i++) {
     if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
       return true;
     }
   }
   return false;
 }
 //Resposta = O(n²)