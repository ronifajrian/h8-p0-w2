var nama = "Mikael";
var peran = "";

if (nama == "") {
  console.log("Nama harus diisi!");
} else if (peran == "") {
  console.log("Hallo " + nama + ", Pilih peranmu untuk memulai game!");
} else if (peran == "Ksatria") {
  console.log("Selamat datang di dunia Proxytia, " + nama);
  console.log("Hallo " + peran + " " + nama +
  ", kamu dapat menyerang dengan senjata mu!");
} else if (peran == "Tabib") {
  console.log("Selamat datang di dunia Proxytia, " + nama);
  console.log("Hallo " + peran + " " + nama +
  ", kamu akan membantu temanmu yang terluka.");
} else if (peran == "Penyihir") {
  console.log("Selamat datang di dunia Proxytia, " + nama);
  console.log("Hallo " + peran + " " + nama +
  ", ciptakan keajaiban yang membantu kemenanganmu!");
}else {
  console.log("Silahkan pilih peran yang sesuai!");
}
