function smallestElemRec (arr){
  
  allPosArr = arr.filter(item => item >= 0)
  if (allPosArr.length == 0){
    return -1
  } 
  
  return findSmallestRec(allPosArr)
}

function findSmallestRec(arr, smallest){
    if (arr.length === 0){
        return smallest;
    }
    else {
      let firstElem = arr.shift()
        if (firstElem < smallest || smallest === undefined){
            smallest = firstElem;
        }
        return findSmallestRec(arr, smallest);
    }
}
