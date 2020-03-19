var punten = 0;

function quiz() {
  var vrgn = ["parijs", "8", "ijselmeer"];
  var merken = ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"];
  var eilanden = ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"];
  var frank = document.getElementById("frank").value;
  var spin = document.getElementById("spin").value;
  var meer = document.getElementById("meer").value;
  var merk = document.getElementById("merk").value;
  var eiland = document.getElementById("eiland").value;
  var antwrdn = [];

  antwrdn.push(frank, spin, meer);

  for (var i = 0; i < antwrdn.length; i++) {
    if (antwrdn[i] == vrgn[i]) {
      punten++;
    }
  }
  if (merken.includes(merk)) {
    punten++;
  }
  if (eilanden.includes(eiland)) {
    punten++;
  }
  document.write("je hebt ", punten, " punten");
}
