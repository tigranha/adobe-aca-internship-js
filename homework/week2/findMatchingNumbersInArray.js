function findMatchingNumbers(arr, num){
  let result = arr.filter(item => item > num);
  
  return result.length > 0 ? result : "Such values do not exist.";
}
