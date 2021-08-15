function countOfMissingnumbers(arr){
   arr.sort( (a,b) =>  a - b)
   let min = arr[0]
   let max = arr[arr.length -1]
   
   let sumMax = max + max*(max-1)/2
   let sumMin = min + min*(min-1)/2

   let sumTotal = sumMax - sumMin
      
   for (let i = 1; i < arr.length; i++){
     sumTotal-= arr[i]
   }
   return sumTotal
 }
