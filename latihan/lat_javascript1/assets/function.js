//let nama1, kodeJurusan, jurusan;
//ini contoh tanpa fucntion, kodeJurusan = "TI";
/*
if (kodeJurusan == "TI") {
  jurusan = "Informatika";
} else if (kodeJurusan == "ACC") {
  jurusan = "Akuntansi";
} else if (kodeJurusan == "ECO") {
  jurusan = "Ekonomi";
} else {
  jurusan = "Tidak Ditemukan!!";
}
*/
/*ini contoh tanpa function
nama1 = "mawar";
document.write("<hr/>");
document.write("<h1>" + nama1 + "</h1>, memilih jurusan " + jurusan);
nama1 = "melati";
document.write("<h1>" + nama1 + "</h1>, memilih jurusan " + jurusan);
*/

function tampildata(nama, kodeJurusan) {
  let jurusan;
  if (kodeJurusan == "TI") {
    jurusan = "Informatika";
  } else if (kodeJurusan == "ACC") {
    jurusan = "Akuntansi";
  } else if (kodeJurusan == "ECO") {
    jurusan = "Ekonomi";
  } else {
    jurusan = "Tidak Ditemukan!!";
  }
  //document.write("<h1>" + nama + "</h1>, memilih jurusan " + jurusan);
  return "<h1>" + nama + "</h1>, memilih jurusan " + jurusan;
}
document.write(tampildata("Slamet", "ACC"));
let names = ["Bilbo", "Gandalf", "Nazgul"];
names.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

/*
tampildata("Mawar", "TI");
tampildata("Melati", "ECO");
tampildata("Andi", "DER");
*/
function belanja(pembeli, brg1, brg2, brg3) {
  let struk = "";
  let total = brg1 + brg2 + brg3;
  let totalbayar = total - 0.1 * total;
  struk = "<hr/>Data Belanja-" + pembeli + "<br/>";
  struk += "Barang-1 = Rp." + brg1 + "<br/>";
  struk += "Barang-2 = Rp." + brg2 + "<br/>";
  struk += "Barang-3 = Rp." + brg3 + "<br/>";
  struk += "<hr/>";
  struk += "Total = " + total + "<br/>";
  struk += "Diskon 10% = " + 0.1 * total + "<br/>";
  struk += "Total Bayar = " + totalbayar + "<br/>";
  if (totalbayar > 30000) {
    struk += "Dapat Voucher Belanja";
  }
  return struk;
}
document.write(belanja("Bu Slamet", 9000, 3000, 5000));
document.write(belanja("Bu Tejo", 19000, 8000, 11000));
