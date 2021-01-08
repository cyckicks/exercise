function dissapearedNumber(arr){
    let newArr = [];
    for(let i = 1; i <= arr.length; i++){
            if(!arr.includes(i)){
                newArr.push(i)
            }
            
    }
    return newArr;
   
}
console.log(dissapearedNumber([1,2,4,4,5]))