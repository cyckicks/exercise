function indexof(array , value){
  for(let i = 0; i <= array.length - 1; i++){
      if(array[i] === value){
          return i;
      }
  }
  return -1;
}
console.log(indexof([1,2,6,3,4,5,6] , 6));