
var isAnagram = function(s, t) {
    u = s.split('').sort().join('')
    v = t.split('').sort().join('')
    if(u === v){
        return true
    }else{
        return false
    }
};

console.log(isAnagram("a","b"))