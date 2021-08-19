function invertObject (obj) {

 let temp = {}
 
 for (let [key, value] of Object.entries(obj)){
   if (temp.hasOwnProperty(value)){
       temp[value] = [...temp[value], key]
   } else {
     temp[value] = key
   }
 }

  obj = temp
  return obj
}
