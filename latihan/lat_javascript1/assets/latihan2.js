let nilai;
nilai = 40; //input
let grade;
if (nilai >= 85) {
  grade = "A";
} else if (nilai >= 70) {
  grade = "B";
} else if (nilai >= 50) {
  grade = "C";
}
// else {
//   grade = "D";
// }
document.write("nilai: " + nilai + " ,grade: " + grade + "<hr/>");

let vaksin;
let virus;
vaksin = 2;
if (vaksin == 0) {
  virus = "Corona";
} else if (vaksin == 1) {
  virus = "Reaktif";
} else {
  virus = "Negatif";
}
document.write("Anda sudah vaksin " + vaksin + " , virus dalam tubuh Anda " + virus);
document.write("<br /> Contoh Switch Case <br/>");
vaksin = 3;
switch (vaksin) {
  case 0:
    virus = "Corona";
    break;
  case 1:
    virus = "Reaktif";
    break;
  default:
    virus = "Negatif";
}
document.write("Anda sudah vaksin " + vaksin + " , virus dalam tubuh Anda " + virus + "<br/>");

let mandi;
let badan;
mandi = "Hari ini".toLocaleLowerCase();
switch (mandi) {
  case "hari ini":
    badan = "Wangi";
    break;
  case "kemarin":
    badan = "Bau";
    break;
  default:
    badan = "Gatal-Gatal";
}
document.write("Saya Mandi " + mandi + " , Sehinggan badan saya " + badan);

let bayar;
let daftar;
let ospek;
bayar = "belum";
daftar = "sudah";
if (bayar == "sudah" || daftar == "sudah") {
  ospek = "sudah bayar,daftar Boleh ikut";
} else {
  ospek = "tidak Boleh ikut";
}
document.write("<br/>ospek:" + ospek);
document.write("<hr/>");
let x = 1;
while (x <= 10) {
  document.write(x + " , ");
  if (x !== 1) {
    x = x + 2;
  } else {
    x++;
  }
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    document.write(i);
  }
}
document.write("<br/>");

let daft_nilai = [90, 80, 75, 35, 20, 40, 30];
//document.write(daft_nilai.length);
for (let i = 0; i < daft_nilai.length; i++) {
  document.write(daft_nilai[i] + " : ");
}
