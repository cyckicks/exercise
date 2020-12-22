function reverse(array){
 let b = [];
 for(let i = array.length-1; i >=0; i--){
     let c = array.pop();
    b.push(c);
 }   
 return b;
}


console.log(reverse([1, 2 ,3 ,4, 5, 6, 7]));