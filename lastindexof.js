function lastIndexOf(array , value){
    for(let i = array.length - 1; i>=0; i--){
        if(array[i]===value){
            return i;
        }
    }
    return -1;
}
console.log(lastIndexOf([1,2,6,3,4,5,6,10] , 22));