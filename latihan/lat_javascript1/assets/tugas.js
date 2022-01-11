//deklarasi variabel
const nama = "Ani Nur";
let uts;
let uas;
let rata_rata;
let note = "";
//memberikan nilai variabel
uts = 70;
uas = 70;
rata_rata = Math.floor((uts + uas) / 2);
//kondisi untuk menampilkan note
if (rata_rata >= 75) {
  note = "LULUS";
} else if (rata_rata >= 50) {
  note = "REMIDI";
} else {
  note = "TIDAK LULUS";
}
//tampilkan hasil
document.write("Nama : " + nama + "<br/>");
document.write("UTS : " + uts + "<br/>");
document.write("UAS : " + uas + "<br/>");
document.write("Nilai Rata-rata : " + rata_rata + "<br/>");
document.write("*Note : Selamat Anda " + note + "<br/>");
document.write("<hr/>");
//tugas 2
document.write("*Data Barang* <br/>");
let diskon;
let harga = [20000, 40000, 65000, 80000];
let total = 0;
let ttl_diskon = 0;
for (let i = 0; i < harga.length; i++) {
  document.write("Data Barang-" + i + ", Harga = " + harga[i] + "<br/>");
  if (harga[i] >= 50000) {
    diskon = harga[i] * 0.05;
    document.write("---Diskon 5%" + "= " + diskon + "<br/>");
    ttl_diskon = ttl_diskon + diskon;
  }
  //hitung total
  total = total + harga[i];
}
document.write("Data Barang-Total =" + total + "<br/>");
document.write("Data Barang-Total Diskon =" + ttl_diskon + "<br/>");
//tugas 3
let daftar;
let bayar;
let ket = "";
daftar = "sudah";
bayar = 1;
if (daftar == "sudah" && bayar == 1) {
  ket = "silahkan ikut OSPEK";
} else if (daftar == "sudah" && bayar == 0) {
  ket = "silahkan bayar terlebih dahulu";
} else {
  ket = "Silahkan hubungi admin";
}
document.write(ket);
``;
