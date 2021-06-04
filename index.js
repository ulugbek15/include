const numbers = [1,2,3,4,5];

function includes(array, numberToFind){

    for(let key of array){
      
      if(key === numberToFind){
          return true
      }
    }
    return false

}

console.log(includes(numbers,7));