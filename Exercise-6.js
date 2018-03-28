// 1. Looping while

var n = 2;
console.log("LOOPING PERTAMA");
while (n <= 20) {
  console.log(n + " - I love coding");
  n += 2;
}

console.log("LOOPING KEDUA");
var m = 20;
while (m >= 2) {
  console.log(m + " - I will become fullstack developer");
  m -= 2;
}

// 2. Looping for
console.log("LOOPING PERTAMA");
for (var i = 1; i <= 20; i++) {
  console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
for (var i = 20; i >= 1; i--) {
  console.log(i + " - I will become fullstack developer");
}

// 3. Angka ganjil genap

// ganjilGenap
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i + ". ganjil");
  }else {
    console.log(i + ". genap");
  }
}
//increament 2 kelipatan 3
for (var i = 1; i <= 100; i += 2) {
  if (i % 3 == 0) {
    console.log(i + " kelipatan 3");
  }else {
    console.log(i);
  }
}
//increament 5 kelipatan 6
for (var i = 1; i <= 100; i += 5) {
  if (i % 6 == 0) {
    console.log(i + " kelipatan 6");
  }else {
    console.log(i);
  }
}
//increament 9 kelipatan 10
for (var i = 1; i <= 100; i += 9) {
  if (i % 10 == 0) {
    console.log(i + " kelipatan 10");
  }else {
    console.log(i);
  }
}
