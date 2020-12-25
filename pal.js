function palindrome(str) {
    let newStr = str.replace(/[\W_]/g, "");
    let strng = newStr.toLowerCase();
    let a = Math.floor(strng.length/2)
    for(let i = 0; i < a; i++){
        if(strng[i] !== strng[strng.length-1-i]){
            return false;
        }
    }
    return true;

  }
  
  console.log(palindrome("race car"));