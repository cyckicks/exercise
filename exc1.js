for (var a = 1; a <= 100; a++){
    if(a % 5 == 0 && a % 3 == 0){
        console.log("fizzbuzz");
    }
    else if(a % 5 == 0 && a % 3 != 0){
        console.log("buzz");
    }
    else if(a % 3 == 0){
        console.log("fizz");
    }
    else{
        console.log(a);
    }
}