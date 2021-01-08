var numJewelsInStones = function(jeweles, stones) {
    let jewele = jeweles.split('')
    let stone = stones.split('')
    let count = 0; 
        for(let i=0; i<stone.length; i++){
        for(let j=0; j<jewele.length; j++){
            if(stone[i] == jewele[j]){
                count++ ;
            }
        }
        }
    return count;
    
};

console.log(numJewelsInStones("z", "ZZZ"))