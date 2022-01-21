let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}

function showMessage(quis, nilai) {
  if (quis == true && (nilai == "A" || nilai == "B")) {
    console.log("Mantab, Terus Dilatih ya!!");
  } else if (quis == true && nilai == "C") {
    console.log("Terus Belajar, Jangan Menyerah");
  } else {
    console.log("Yuk Latihan!!");
  }
}
showMessage(true, "B");

let belajar = ["html", "css", "js"];
console.log(belajar.shift());
console.log(belajar);

let uas = "KamuBisa!!";
console.log(uas.substring(4, 8));
console.log(uas.length);
let tgl = new Date();
console.log(tgl.getDate());
console.log(tgl.getFullYear());
