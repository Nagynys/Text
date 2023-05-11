'use strict'

class Pojisteny {
  constructor(jmeno, prijmeni, vek, telefon) {
  this.jmeno = jmeno;
  this.prijmeni = prijmeni;
  this.vek = vek;
  this.telefon = telefon;
}}

// prázdný div pro seznam pojištěnců + prázdné pole pro vytv. objektů
const seznamDiv = document.getElementById("seznam");
let seznamPojistencu = [];

// tlačítko pro uložení
const tlacitkoUlozit = document.getElementById("potvrdit");

// kliknutí na tlačítko => uloží se a provede následující kód
tlacitkoUlozit.addEventListener("click", function(e) {
e.preventDefault();

// input pro vstup inf.
const jmenoInput = document.getElementById("jmeno");
const prijmeniInput = document.getElementById("prijmeni");
const vekInput = document.getElementById("vek");
const telefonInput = document.getElementById("telefon");

// nový objekt s hodnotami z inputů
const novyPojisteny = new Pojisteny(
  jmenoInput.value,
  prijmeniInput.value,
  vekInput.value,
  telefonInput.value
);

// přidání nového objektu do pole
seznamPojistencu.push(novyPojisteny);

// nový řádky v tabulce s inf. o novém pojištěnci, připnutí
const novyRadek = document.createElement("tr");
const jmenoPrijmeniTd = document.createElement("td");
const telefonTd = document.createElement("td");
const vekTd = document.createElement("td");

  jmenoPrijmeniTd.textContent = novyPojisteny.jmeno + " " + novyPojisteny.prijmeni;
  telefonTd.textContent = novyPojisteny.telefon;
  vekTd.textContent = novyPojisteny.vek;

  novyRadek.appendChild(jmenoPrijmeniTd);
  novyRadek.appendChild(telefonTd);
  novyRadek.appendChild(vekTd);

// přidání nového řádku do tabulky
const tabulka = document.querySelector("table");
tabulka.appendChild(novyRadek);

// vymazání obsahu inputů pro další zadání
jmenoInput.value = "";
prijmeniInput.value = "";
vekInput.value = "";
telefonInput.value = "";


// uložení seznamu pojištěnců do LS
localStorage.setItem("seznamPojistencu", JSON.stringify(seznamPojistencu));
});

// načtení seznamu pojištěnců z LS 
window.addEventListener("load", function () {
const ulozenySeznam = localStorage.getItem("seznamPojistencu");

  if (ulozenySeznam) {
    seznamPojistencu = JSON.parse(ulozenySeznam);

    seznamPojistencu.forEach(function (pojisteny) {
      const novyRadek = document.createElement("tr");
      const jmenoPrijmeniTd = document.createElement("td");
      const telefonTd = document.createElement("td");
      const vekTd = document.createElement("td");

        jmenoPrijmeniTd.textContent = pojisteny.jmeno + ' ' + pojisteny.prijmeni;
        telefonTd.textContent = pojisteny.telefon;
        vekTd.textContent = pojisteny.vek;

        novyRadek.appendChild(jmenoPrijmeniTd);
        novyRadek.appendChild(telefonTd);
        novyRadek.appendChild(vekTd);

        const tabulka = document.querySelector("table");
        tabulka.appendChild(novyRadek);
    });
  }
});