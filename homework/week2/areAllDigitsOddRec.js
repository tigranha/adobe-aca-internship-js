function areAllDigitsOddRec(num){
  if ((num % 10) % 2 === 0){
    return false
  } 
  if (Math.floor(num/10) == 0){
    return true
  }
    return areAllDigitsOdd(Math.floor(num/10))

}
