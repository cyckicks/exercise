var containsDuplicate = function(nums) {
    numValue = []
    count = 0
    for(let i=0; i<nums.length; i++){
        if(nums.includes(nums[i])){
            count++
        }
       
    }
    return count
    
};
console.log(containsDuplicate([1,1,1,1,3]));