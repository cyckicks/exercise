function firstAndSecondSmallest(arr){
    let a = Math.min(...arr);
    let b = arr.indexOf(a);
    arr.splice(b , 1)
    let c = Math.min(...arr);
    return {smallest : a, second : c}
}


console.log("the first and second smallest element of arr are" ,firstAndSecondSmallest([10,5,99,22,78,36,85,82,46]))