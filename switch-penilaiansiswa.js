let nilai = [
  { Nama: "bagas", grade: "A" },
  { Nama: "alvin", grade: "B" },
  { Nama: "satria", grade: "D" },
  { Nama: "qinza", grade: "E" }
];

nilai.forEach(function(item) {
  switch (item.grade.toUpperCase()) {
    case "A":
      console.log(`Grade A: Nilai sangat Baik (${item.Nama})`);
      break;
    case "B":
      console.log(`Grade B: Nilai Baik (${item.Nama})`);
      break;
    case "C":
      console.log(`Grade D: Nilai kurang baik (${item.Nama})`);
      break;
    default:
      console.log(`Grade ${item.grade}: Nilai Buruk (${item.Nama})`);
      break;
  }
});
