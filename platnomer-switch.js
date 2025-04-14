let platNomor = ["B 5678 zz", "D 2529 XY", "F 2020 ZZ", "B 3459 GH"];

function cekGanjilGenap(angka) {
  switch (angka % 2) {
    case 0:
      return "Genap";
    case 1:
      return "Ganjil";
    default:
      return "Gak valid";
  }
}

for (let plat of platNomor) {
  let angka = parseInt(plat.split(" ")[1]);
  let hasil = cekGanjilGenap(angka);
  console.log(`${plat} itu plat ${hasil}`);
}
    
