//Regex Adventure
#1

module.exports = function(str) {
  var reger = /LITERALLY/;
  return reger.test(str);
}

#2

module.exports = function(str) {
  var reger = /^LITERALLY/;
  return reger.test(str);
}
