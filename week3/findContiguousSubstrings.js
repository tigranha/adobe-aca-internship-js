function findContiguousSubstrings(str,length){
  if (length > str.length || length <= 0){
    return "Wrong input";
  }
  if (length == str.length){
    return str;
  }
  
  let index = 0;
  let result = []
  while ( (index + length) <= str.length){
    result.push(str.substring(index,index + length));
    index++;
  }
  return result.join();
}
