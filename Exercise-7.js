// 1. Menyusun barisan bintang
var rows1 = 5;

for (var i = 0; i < rows1; i++) {
  console.log("*");
}

// 2. Barisan bintang nested looping
var rows1 = 5;

for (var i = 0; i < rows1; i++) {
  var s = "";
  for (var j = 0; j < rows1; j++) {

    s += "*";
  }
  console.log(s);
}

// 3. Menyusun barisan tangga bintang nested looping
var rows3 = 5;

for (var i = 0; i < rows3; i++) {
  var s="";
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  console.log(s);
}
