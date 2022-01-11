function setup() {
  document.getElementById("btndaftar").disabled = true;
}
document.getElementById("nama").onkeyup = function () {
  let txtnama = document.getElementById("nama");
  txtnama.value = txtnama.value.toUpperCase();
  let kodenama = txtnama.value.substring(0, 3);
  let today = new Date();
  let newtoday = today.getFullYear();
  let kodedaftar = kodenama + newtoday;
  document.getElementById("kode").value = kodedaftar;
};

function hitungumur(dateString) {
  date = dateString;
  var today = new Date();
  var birthday = new Date(date);
  var year = 0;
  if (today.getMonth() < birthday.getMonth()) {
    year = 1;
  } else if (today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate()) {
    year = 1;
  }
  var age = today.getFullYear() - birthday.getFullYear() - year;

  if (age < 0) {
    age = 0;
  }

  document.getElementById("tampilumur").innerHTML = "<b>" + age + "Tahun</b>";
  if (age <= 17) {
    document.getElementById("btndaftar").disabled = true;
    alert("Mohon Maaf Anda Belum Bisa Mendaftar Karena Belum 18 Tahun");
  } else {
    document.getElementById("btndaftar").disabled = false;
  }
}

document.getElementById("alamat").onchange = function () {
  let txtalamat = document.getElementById("alamat").value;
  let jml_karakter = txtalamat.length;
  if (Number(jml_karakter) >= 30) {
    document.getElementById("note").style.display = "none";
  } else {
    document.getElementById("note").style.display = "inline";
  }
};

document.getElementById("btndaftar").onclick = function () {
  let kode = document.getElementById("kode").value;
  let nama = document.getElementById("nama").value;
  let tempat = document.getElementById("tempatlahir").value;
  let tgllahir = document.getElementById("tgllahir").value;
  let jk = document.getElementById("jk").value;
  let email = document.getElementById("email").value;
  let alamat = document.getElementById("alamat").value;

  let datarows = "<tr>";
  datarows += "<td>" + kode + "</td>";
  datarows += "<td>" + nama + "</td>";
  datarows += "<td>" + tempat + ", " + tgllahir + "</td>";
  datarows += "<td>" + jk + "</td>";
  datarows += "<td>" + email + "</td>";
  datarows += "<td>" + alamat + "</td>";
  datarows += "</tr>";
  document.getElementById("rows_tabel").innerHTML = datarows;
};
