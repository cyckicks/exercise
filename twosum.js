function twoSum(arr , target){
    for(let i = 0; i < arr.length; i++){
      let a = target - arr[i];
      if(arr.includes(a)){
          console.log(a)
          return [arr.indexOf(a), arr.indexOf(target-a)];
      }
    }
   
}

console.log(twoSum([1,2,4,5,10,7,6], 15))