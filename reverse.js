function reverse(array){
    let b = [];
    for(var i = 0; i < array.length; i++){
        b.push(array.pop());
    }   
    return b;
   }
   
   
   console.log(reverse([1, 2 ,3 ,4]));
