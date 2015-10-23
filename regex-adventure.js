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

// #5


module.exports = function(str) {
  var reger = /[^0-9][^A-Z]/;
  return reger.test(str);
}
