function pigLatin(str){
    let c = "";
    let count = 0;
    let b = ""
    let a = str.toLowerCase()
    if(a[0] === "a" || a[0] === "e" || a[0] === "i" || a[0] === "o" || a[0] === "u"){
        return str + "way";
    }
    for(let i = 0; i < a.length; i++){
        if(a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u"){
            c = str + b + "ay";
            break ;
        }else{
            b += a[i]
            count++
            console.log(b)
        }
    }
    return c.slice(count , c.length);
}
 console.log(pigLatin("glove"))
 