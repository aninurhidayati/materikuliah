var nama = "Ani Nur";
var materi = "Web Design";
//cara menampilkan output
document.write(" <h1>Nama Saya" + nama + "</h1><h2>" + materi + "</h2>");

var hewan = "Kucing";
var hewan = "Binatang Lucu";
document.write(hewan);

let matkul = "web";
let matkul_a = "pemrograman";
matkul = "web design";
document.write("<br/>" + matkul);

var kampus = "LP3i";
kampus = "XYZ";
document.write("<br/>" + kampus);

const judul1 = "<h3>Tipe Variabel</h3>";
document.write(judul1 + "<hr/>");
let data_Mahasiswa = ["adit", "putra", "galang", "agung", "sulthan", "ardi"];
document.write("Mahasiswa bernama : " + data_Mahasiswa[3] + "<br/>");

//contoh deklarasi variabel tipe data Object
var rekapsNilai = { nama: "aninur", materi: "Web Design", nilaiuts: 85 };
//cara menampilkan output
document.write("Nilai " + rekapsNilai.materi + "=" + rekapsNilai.nilaiuts + "<hr/>");

let harga1 = 30000;
let harga2 = 15000;

let tot_jumlah = harga1 + harga2;
let tot_kurang = harga1 - harga2;
let tot_kali = harga1 * harga2;
let diskon = 0.1 * tot_jumlah;

document.write("-Harga1 : " + harga1 + "<br/>");
document.write("-Harga2 : " + harga2 + "<br/>");
document.write("-Total(+) : " + tot_jumlah + "<br/>");
document.write("-Total(-) : " + tot_kurang + "<br/>");
document.write("-Total(*) : " + tot_kali + "<br/>");
document.write("-Diskon(10%) : " + diskon + "<br/><br/>");

let x;
let y;
x = 10;
y = 5;

document.write("x = " + x + ", x += y  sama dengan x = x + y  ," + (x += y) + " <br/>"); //15
document.write("x = " + x + " <br/>");
document.write("y = " + y + " <br/>");
document.write("x = " + x + ", x -= y  sama dengan x = x - y  ," + (x -= y) + " <br/>");
