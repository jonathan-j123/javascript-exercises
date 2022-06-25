const reverseString = function(string) {
    let value = '';
    for (let i = 0; i < string.length; i++){
        value = string[i] + value;
    }
    return string = value;

};

// Do not edit below this line
module.exports = reverseString;
