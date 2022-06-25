const sumAll = function(firstNo, secondNo ) {
    let i = firstNo;
    let repetition = secondNo;
    let sum = 0;
    if(typeof firstNo !== 'number' || typeof secondNo !== 'number') return "ERROR";
    if(firstNo < 0 || secondNo < 0) return "ERROR";
    if(firstNo > secondNo) {
        i = secondNo; 
        repetition = firstNo;

    }
    for (; i <= repetition; i++){
        
        sum += i; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
