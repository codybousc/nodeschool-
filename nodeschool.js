//leanyounode

#1
console.log(process.argv);

#2
var arr = process.argv;

function sum(array) {
  var total = 0;
  for(var i = 2; i < array.length; i++) {
    total += Number(array[i]);
  }
  return total;
}

console.log(sum(arr));

#3

var fs = require('fs')
var testFile = fs.readFileSync(process.argv[2]);

function readFile(file) {
  file = file.toString();
  return file.split("\n").length -1;
}

console.log(readFile(testFile));
