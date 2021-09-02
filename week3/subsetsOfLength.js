function subsetsOfLength(array, n) {

    let result = [ [] ];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0, len = result.length; j < len; j++) {
        result.push(result[j].concat(array[i]));
      }
    }
    return result.filter(e => e.length === n);
  }
