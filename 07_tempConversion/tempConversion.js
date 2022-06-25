const ftoc = function(fc) {
  fc = (fc - 32) * 0.5556;
  return Math.round(fc * 10) / 10;

};

const ctof = function(cf) {
  cf = (cf * 1.8) + 32;
  return Math.round(cf * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
