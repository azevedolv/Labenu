let array = [1,2,3,3,9,2,1]
function countItems(arr:any[]) {
    const countMap = Object.create(null);
  
    for (const element of arr) {
      // Basicamente, estamos dizendo: atribua à `countMap[element]` o valor
      // atual (ou zero, caso não existir) somado ao número 1.
      countMap[element] = (countMap[element] || 0) + 1;
    }
    const countNumbers = Object.entries(countMap).map(([value, count]) => ({
        numero: value,
        quantidade: count
      })).filter((number)=>{
        return number.quantidade == 1
      });
    return countNumbers
  }

  console.log(countItems(array))