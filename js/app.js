const temizle = document.querySelector(".C");
const silme = document.querySelector(".Silme");
const modulus = document.querySelector(".modulus");
const bolme = document.querySelector(".bolme");
const yedi = document.querySelector(".yedi");
const sekiz = document.querySelector(".sekiz");
const dokuz = document.querySelector(".dokuz");
const carpma = document.querySelector(".carpma");
const dort = document.querySelector(".dort");
const bes = document.querySelector(".bes");
const alti = document.querySelector(".alti");
const cikartma = document.querySelector(".cikartma");
const bir = document.querySelector(".bir");
const iki = document.querySelector(".iki");
const uc = document.querySelector(".uc");
const toplama = document.querySelector(".toplama");
const renk = document.querySelector(".renk");
const sifir = document.querySelector(".sifir");
const virgul = document.querySelector(".virgul");
const esittir = document.querySelector(".esittir");
const ekran = document.querySelector(".output");
const ekranIslem = document.querySelector(".output-islem");

let sonuc = 0;
let toplam = 0;

const bir1 = 1;
const iki2 = 2;
const uc3 = 3;
const dort4 = 4;
const bes5 = 5;
const alti6 = 6;
const yedi7 = 7;
const sekiz8 = 8;
const dokuz9 = 9;
const sifir0 = 0;
const arti = "+";
const eksi = "-";
const bol = "/";
const carp = "x";
const mod = "%";

let islem;
let sayilar = [];
let ekranCikti = [];

bir.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = bir1;
  } else {
    ekran.textContent += bir1;
  }
  ekranCikti.push(bir1);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
iki.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = iki2;
  } else {
    ekran.textContent += iki2;
  }
  ekranCikti.push(iki2);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
uc.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = uc3;
  } else {
    ekran.textContent += uc3;
  }
  ekranCikti.push(uc3);
  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
dort.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = dort4;
  } else {
    ekran.textContent += dort4;
  }
  ekranCikti.push(dort4);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
bes.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = bes5;
  } else {
    ekran.textContent += bes5;
  }
  ekranCikti.push(bes5);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
alti.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = alti6;
  } else {
    ekran.textContent += alti6;
  }
  ekranCikti.push(alti6);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
yedi.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = yedi7;
  } else {
    ekran.textContent += yedi7;
  }
  ekranCikti.push(yedi7);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
sekiz.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = sekiz8;
  } else {
    ekran.textContent += sekiz8;
  }
  ekranCikti.push(sekiz8);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
dokuz.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = dokuz9;
  } else {
    ekran.textContent += dokuz9;
  }
  ekranCikti.push(dokuz9);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
sifir.onclick = function () {
  if (
    ekran.textContent.includes("+") ||
    ekran.textContent.includes("%") ||
    ekran.textContent.includes("-") ||
    ekran.textContent.includes("/") ||
    ekran.textContent.includes("x") ||
    ekranIslem.textContent.includes("=")
  ) {
    ekran.textContent = sifir0;
  } else {
    ekran.textContent += sifir0;
  }
  ekranCikti.push(sifir0);

  if (ekranIslem.textContent.includes("=")) {
    ekranIslem.textContent = "";
    sayilar = [];
  }
};
temizle.onclick = function () {
  ekran.textContent = "";
  ekranIslem.textContent = "";
  for (let index = 0; index < sayilar.length + 1; index++) {
    sayilar.shift();
  }
};
virgul.onclick = function () {
  ekran.textContent += ".";
};
silme.onclick = function () {
  if (
    !(
      ekran.textContent.includes("+") ||
      ekran.textContent.includes("%") ||
      ekran.textContent.includes("-") ||
      ekran.textContent.includes("/") ||
      ekran.textContent.includes("x") ||
      ekranIslem.textContent.includes("=")
    )
  ) {
    ekranIslem.textContent = "";
    ekranCikti.pop();
    ekran.textContent = ekranCikti.join("");
  }
};
toplama.onclick = function () {
  islem = arti;
  ekranCikti = [];
  if (
    !(
      ekran.textContent.includes("+") ||
      ekran.textContent.includes("%") ||
      ekran.textContent.includes("-") ||
      ekran.textContent.includes("/") ||
      ekran.textContent.includes("x")
    )
  ) {
    if (sayilar[sayilar.length - 1] != toplam) {
      sayilar.push(Number(ekran.textContent));
    }
    ekran.textContent += " +";
  }

  ekran.innerHTML = `${
    ekran.textContent.slice(0, ekran.textContent.length - 1) + " +"
  }`;
  ekranIslem.textContent = "+";
};
cikartma.onclick = function () {
  islem = eksi;
  ekranCikti = [];

  if (
    !(
      ekran.textContent.includes("+") ||
      ekran.textContent.includes("%") ||
      ekran.textContent.includes("-") ||
      ekran.textContent.includes("/") ||
      ekran.textContent.includes("x")
    )
  ) {
    if (sayilar[sayilar.length - 1] != toplam) {
      sayilar.push(Number(ekran.textContent));
    }

    ekran.textContent += " -";
  }
  ekran.innerHTML = `${
    ekran.textContent.slice(0, ekran.textContent.length - 1) + " -"
  }`;
  ekranIslem.textContent = "-";
};
carpma.onclick = function () {
  islem = carp;
  ekranCikti = [];
  if (
    !(
      ekran.textContent.includes("+") ||
      ekran.textContent.includes("%") ||
      ekran.textContent.includes("-") ||
      ekran.textContent.includes("/") ||
      ekran.textContent.includes("x")
    )
  ) {
    if (sayilar[sayilar.length - 1] != toplam) {
      sayilar.push(Number(ekran.textContent));
    }
    ekran.textContent += " x";
  }
  ekran.innerHTML = `${
    ekran.textContent.slice(0, ekran.textContent.length - 1) + " x"
  }`;
  ekranIslem.textContent = "x";
};
bolme.onclick = function () {
  islem = bol;
  ekranCikti = [];
  if (
    !(
      ekran.textContent.includes("+") ||
      ekran.textContent.includes("%") ||
      ekran.textContent.includes("-") ||
      ekran.textContent.includes("/") ||
      ekran.textContent.includes("x")
    )
  ) {
    if (sayilar[sayilar.length - 1] != toplam) {
      sayilar.push(Number(ekran.textContent));
    }
    console.log(sayilar);
    ekran.textContent += " /";
  }
  ekran.innerHTML = `${
    ekran.textContent.slice(0, ekran.textContent.length - 1) + " /"
  }`;
  ekranIslem.textContent = "/";
};
modulus.onclick = function () {
  islem = mod;
  ekranCikti = [];
  if (
    !(
      ekran.textContent.includes("+") ||
      ekran.textContent.includes("%") ||
      ekran.textContent.includes("-") ||
      ekran.textContent.includes("/") ||
      ekran.textContent.includes("x")
    )
  ) {
    if (sayilar[sayilar.length - 1] != toplam) {
      sayilar.push(Number(ekran.textContent));
    }

    ekran.textContent += " %";
  }
  ekran.innerHTML = `${
    ekran.textContent.slice(0, ekran.textContent.length - 1) + " %"
  }`;
  ekranIslem.textContent = "%";
};

esittir.onclick = function () {
  ekranCikti = [];
  ekranIslem.textContent = "=";
  sayilar.push(Number(ekran.textContent));

  if (islem == arti) {
    for (let index = 0; index < sayilar.length; index++) {
      sonuc += sayilar[index];
    }
    sayilar = [];
  }

  if (islem == eksi) {
    for (let index = 1; index < sayilar.length; index++) {
      sonuc = sayilar[0];
      sonuc -= sayilar[index];
    }
    sayilar = [];
  }
  if (islem == carp) {
    sonuc = 1;
    for (let index = 0; index < sayilar.length; index++) {
      sonuc *= sayilar[index];
      console.log(sonuc + "carpma");
    }
    sayilar = [];
  }
  if (islem == bol) {
    for (let index = 1; index < sayilar.length; index++) {
      sonuc = sayilar[0];
      sonuc /= sayilar[index];
    }
    sayilar = [];
  }

  if (islem == mod) {
    for (let index = 1; index < sayilar.length; index++) {
      sonuc = sayilar[0];
      sonuc %= sayilar[index];
    }
    sayilar = [];
  }

  ekran.textContent = sonuc;
  sayilar.push(sonuc);
  toplam = sonuc;
  sonuc = 0;
};
const renkler = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];
const sarkilar = [
  "audio/Baba.mp3",
  "audio/Bozos.mp3",
  "audio/Business.mp3",
  "audio/Captain.mp3",
  "audio/Dragon.mp3",
  "audio/Ezel2.mp3",
  "audio/Makina.mp3",
  "audio/Huzun.mp3",
  "audio/Inanirim.mp3",
];
renk.onclick = function () {
  const sarki = Math.floor(Math.random() * 9);
  const rastgele = Math.floor(Math.random() * 150);
  document.querySelector("main").style.backgroundColor = renkler[rastgele];
  document.querySelector("audio").src = sarkilar[sarki];
};
