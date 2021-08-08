function allEvenDigitNumbersInRange(num1,num2){
  let arr = arrayFromRange(num1,num2)
  let result = arr.filter(item => areAllDigitsEven(item))
  return result.length > 0 ? result : "Such numbers do not exist."
                    
}
  
function arrayFromRange(num1,num2){
  let arr = []
  let length = 1 + num2 - num1;
  for (let i = 0; i < length; i++){
    arr[i] = num1++;
  }
  return arr;
}

function areAllDigitsEven(num){
  let temp = num;
  while(temp > 0){
    let digit = temp % 10;
    if (digit % 2 != 0 || digit == 1){
      return false;
    } 
      temp = Math.floor(temp/10);
  }
  return true;
}
