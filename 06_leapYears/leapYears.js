const leapYears = function(year) {
    if (year % 4 === 0){
        if(year % 100 === 0 && !(year % 400 === 0)) return year = false;
        return year = true;
    } else {
        return year = false;
    }
};

// Do not edit below this line
module.exports = leapYears;
