function fabionaci(value){
    var a = [1];
    // var b = [];
    if(value == 0){
        return [];
    }
     for (i=1; i<value; i++){
       if(i == 1){
           a[i] = a[0];
       }
       else{
           a[i] = a[i-1] + a[i-2];
       }
    //    b.push(a[i]);
     }  
     return a;
    }
    
    console.log(fabionaci(5));
