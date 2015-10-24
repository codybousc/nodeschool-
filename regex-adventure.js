//Regex Adventure
// #1
//
// module.exports = function(str) {
//   var reger = /LITERALLY/;
//   return reger.test(str);
// }
//
// #2
//
// module.exports = function(str) {
//   var reger = /^LITERALLY/;
//   return reger.test(str);
// }
//
// #3

// module.exports = function(str) {
//   var reger = /BANANAS$/;
//   return reger.test(str);
// }

// #4


// module.exports = function(str) {
//   var reger = /^[aeiou0-9]/;
//   return reger.test(str);
// }

// // #5
//
//
// module.exports = function(str) {
//   var reger = /[^0-9][^A-Z]/;
//   return reger.test(str);
// }

// #6


// module.exports = function(str) {
//   var reger = /\.$/;
//   return reger.test(str);
// }

// #7


// module.exports = function(str) {
//   //var reger = /^[0-9]\.jpe?g$/; initial attempt. needed to put the second portion in parens
//   var reger = /^[0-9]+(\.jpe?g$)/;
//   return reger.test(str);
// }

// #8
module.exports = function(str) {
  str = str.replace(/\s/g, ""); 
  return str.split(/,/g);
}
