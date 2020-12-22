function slice(array , start, end){
    let b = [];
    if(start < 0){
        start = array.length + start;
        console.log(start);
    }
    if (start === undefined){
        start = 0;
    }
    if (start > array.length - 1){
        return [];
    }
    if(end < 0){
        end = array.length + end;
    }
    if(end === undefined){
        end = array.length;
    }
    if (end > array.length -1){
        end = array.length;
    }
    for(let i = start; i < end; i++){
        b.push(array[i]);
    }
    return b;
}
console.log(slice(["a","b","c","d","e","f","g","h"], undefined , undefined));
array = ["a","b","c","d","e","f","g","h"];
console.log(array.slice( undefined, undefined));