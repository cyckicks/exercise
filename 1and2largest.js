function firstAndSecondLargest(arr){
    let a = Math.max(...arr);
    let b = arr.indexOf(a);
    arr.splice(b , 1)
    let c = Math.max(...arr);
    return {largest : a, second : c}
}


console.log("the first and second largest element of arr are" ,firstAndSecondLargest([1,2,3,4,5,6,7,8,9,10,11,12]))