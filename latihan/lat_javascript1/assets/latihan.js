console.log("Helloo javascript!!");
console.log("ini contoh eksternal js");
document.write("Belajar Javascript Mudah! <br/>");

// contoh penulisan variabel
var nama = "Ani Nur Hidayati";
let alamat = "Sidoarjo";
const no_telp = "08571198001";

//cara menampilkan value dari sebuah variabel
document.write(nama);
//cara lain menampilkan 2 variabel dalam 1 output
document.write("<br/>" + alamat + " , Telp." + no_telp + "<br/>");

var hewan = "Kucing";
var hewan = "Jenis-jenis hewan";
document.write(hewan); //ouput:  Jenis-jenis hewan
document.write("<br/>");

let materiA = "Web Design";
let materi_b = "Pemrograman";
document.write(materiA);

//contoh deklarasi constanta, nilai tidak dapat dirubah
const kampus = "LP3I";
//jika dirubah maka akan muncul error
// kampus = "XYZ"; //Error: Assignment to constant variable.

//contoh deklarasi variabel String dengan ' ' atau " "
let user = "programmer";
let namaLengkap = "Ani Nur";
//contoh deklarasi variabel  Integer, Number, Float
let nilai = 95;
let ipk = 32.5;
//contoh deklarasi variabel Boolean (nilai true dan false)
let lulus = true;
let gagal = false;
//contoh deklarasi variabel null (tidak ada nilainya)
let beasiswa = null;
//contoh deklarasi variabel undefined (kondisi variabel belum diberi nilai)
let remidial;
//maka jika dicetak output nya "undefined"
document.write(remidial + "<br/>");

//contoh deklarasi variabel tipe data array
var dataSiswa = ["adit", "putra", "galang", "agung", "sulthan", "ardi"];
document.write(dataSiswa[1]); //output: putra

//contoh deklarasi variabel tipe data Object
var rekapNilai = { nama: "aninur", materi: "Web Design", nilai: 90 };
//cara menampilkan output
document.write(rekapNilai.nama);
document.write(JSON.stringify(rekapNilai));

const nilaiUTS = 100;
const nilaiQuiz = 90;
//contoh operator aritmatika PENJUMLAHAN (+)
let jumlah1 = nilaiUTS + nilaiQuiz;
document.write("hasil penjumlahan: " + jumlah1);
//contoh operator aritmatika PENGURANGAN (-)
let jumlah2 = nilaiUTS - nilaiQuiz;
document.write("hasil pengurangan: " + jumlah2);
//contoh operator aritmatika PERKALIAN (*)
let jumlah3 = nilaiUTS * nilaiQuiz;
document.write("hasil perkalian: " + jumlah3);
//contoh operator aritmatika PEMBAGIAN (/)
let jumlah4 = nilaiUTS / 2;
document.write("hasil pembagian: " + jumlah4);
//contoh operator aritmatika EKSPONEN (**)
let pangkat = 9 ** 2;
document.write("hasil Pangkat: " + pangkat);

let tugas1 = 90;
let sisa = tugas1 % 3;
//contoh modulus
document.write("hasil Modulus: " + sisa);

let semester = 3;
semester++;
document.write("increment: " + semester); //output : 4
semester--;
document.write("decrement: " + semester); //ouput :3
