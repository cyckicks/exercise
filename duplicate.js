var containsDuplicate = function(nums) {
    num = nums.sort()
    if(num.length === 0){
        return false
    }else{
     for(let i=0; i<num.length; i++){
         if(num[i] === num[i+1]){
             return true;
         }
    }
    return false
 }
}
console.log(containsDuplicate([5,6,7,4,22,24,22]));