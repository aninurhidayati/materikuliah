//code untuk isi combobox waktu pertandingan
let option_waktu = "";
for (let a = 0; a <= 150; a += 15) {
  option_waktu += "<option value=" + a + ">" + a + "</option>";
}
document.getElementById("waktu_tanding").innerHTML = option_waktu;
//buat function untuk button hasil
document.getElementById("btnHasilBola").onclick = function () {
  //deklarasi variabel untuk menampung waktu pertandingan
  let waktuTanding = Number(document.getElementById("waktu_tanding").value);
  //deklarasi variabel untuk menampung skor
  let skorA = document.getElementById("skor_a").value;
  let skorB = document.getElementById("skor_b").value;
  //deklarasi variabel untuk menampilkan output
  let outputBola = "";
  //cek validasi untuk menampilkan hasil
  if (waktuTanding <= 45) {
    outputBola = "<h5>Tim-A : " + skorA + " , Tim-B : " + skorB + "</h5><h1>Pertandingan Babak Pertama</h1>";
  } else if (waktuTanding < 90) {
    outputBola = "<h5>Tim-A : " + skorA + " , Tim-B : " + skorB + "</h5><h1>Pertandingan Babak Kedua</h1>";
  } else if (waktuTanding <= 120) {
    if (skorA === skorB) {
      outputBola = "<h5>Tim-A : " + skorA + " , Tim-B : " + skorB + "</h5><h1>Perpanjangan Waktu 2x15 menit</h1>";
    } else {
      if (skorA > skorB) {
        outputBola = "<h5>Tim-A : " + skorA + " , Tim-B : " + skorB + "</h5><h1>Tim-A Pemenang</h1>";
      } else {
        outputBola = "<h5>Tim-B : " + skorA + " , Tim-B : " + skorB + "</h5><h1>Tim-B Pemenang</h1>";
      }
    }
  } else {
    if (skorA === skorB) {
      outputBola = "<h5>Tim-B : " + skorA + " , Tim-B : " + skorB + "</h5><h1>ADU PINALTI</h1>";
    } else {
      if (skorA > skorB) {
        outputBola = "<h5>Tim-A : " + skorA + " , Tim-B : " + skorB + "</h5><h1>Tim-A Pemenang</h1>";
      } else {
        outputBola = "<h5>Tim-B : " + skorA + " , Tim-B : " + skorB + "</h5><h1>Tim-B Pemenang</h1>";
      }
    }
  }

  document.getElementById("hasilpertandingan").innerHTML = outputBola;
};

document.getElementById("judulbola").onmouseover = function () {
  document.getElementById("judulbola").style.backgroundColor = "red";
};

document.getElementById("judulbola").onmouseout = function () {
  document.getElementById("judulbola").style.backgroundColor = "whitesmoke";
};

document.getElementById("skor_a").onmouseup = function () {
  document.getElementById("skor_a").style.color = "red";
};

document.getElementById("skor_a").onmousedown = function () {
  document.getElementById("skor_a").style.color = "green";
};

document.getElementById("skor_b").onfocus = function () {
  document.getElementById("skor_b").style.color = "red";
  document.getElementById("skor_b").style.backgroundColor = "whitesmoke";
};

document.getElementById("skor_a").onkeydown = function () {
  document.getElementById("noteA").style.display = "inline";
  document.getElementById("noteA").style.color = "red";
};

document.getElementById("skor_a").onkeyup = function () {
  document.getElementById("noteA").style.display = "none";
  document.getElementById("noteA").style.color = "red";
};

document.getElementById("keterangan").onkeyup = function () {
  let ket = document.getElementById("keterangan");
  ket.value = ket.value.toUpperCase();
};
