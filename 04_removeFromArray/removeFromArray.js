const removeFromArray = function(array, ...indexRemover) {
    return array.filter( x => !indexRemover.includes(x) );
    
};

// Do not edit below this line
module.exports = removeFromArray;
