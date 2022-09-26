//* FOR LOOP

const rakamlar = [-5, 15, 22, -4, 45, 78, -25];
let toplam = 0;

for (let i = 0; i < rakamlar.length; i++) {
  toplam += rakamlar[i];
}

console.log(toplam);

//! Dizi içindeki negatif ve pozitif sayıların topamlarını bulma
const topla = (rakamlar) => {
  negatifler = 0;
  pozitifler = 0;
  for (let i = 0; i < rakamlar.length; i++) {
    if (rakamlar[i] < 0) {
      negatifler += rakamlar[i];
    } else {
      pozitifler += rakamlar[i];
    }
  }
  console.log(`Dizideki negatif sayıların toplamı: ${negatifler}`);
  console.log(`Dizideki pozitif sayıların toplamı: ${pozitifler}`);
};
topla(rakamlar);

//! Dizideki negatif ve pozitif sayıları ayrı ayrı diziye atayınız.

const negatif = [];
const pozitif = [];

const dizelereAyir = (rakamlar) => {
  for (let i = 0; i < rakamlar.length; i++) {
    if (rakamlar[i] < 0) {
      negatif.push(rakamlar[i]);
    } else {
      pozitif.push(rakamlar[i]);
    }
  }
  console.log(`Negatifler: ${negatif}`);
  console.log(`Pozitifler: ${pozitif}`);
};
dizelereAyir(rakamlar);

console.log(negatif);
console.log(pozitif);
console.log(rakamlar);

//! dizideki notların ortalamasını bulma

const notlar = [55, 77, 23, 89, 100];
let toplamm = 0;

for (let i = 0; i < notlar.length; i++) {
  toplamm += notlar[i];
}
console.log("ORTALAMA:", toplamm / notlar.length);

//*FOR IN LOOP

//* For döngüsünün bir diğer kullanımıdır. Sayaç ve dizinin uzunluğu gibi bir şey tanımlamaya gerek yoktur. Dizinin elemanlarına direkt olarak erişebiliriz.

const adlar = ["Ahmet", "Mehmet", "Ali", "Veli", "Ayşe", "Fatma"];
const soyadlar = ["Yılmaz", "Kaya", "Korkmaz", "Kara", "Kılıç", "Koç"];

const birlestir = (adlar, soyadlar) => {
  let adlarVeSoyadlar = [];
  for (let i in adlar) {
    adlarVeSoyadlar.push(adlar[i] + " " + soyadlar[i]);
  }
  return adlarVeSoyadlar;
};
console.log(birlestir(adlar, soyadlar));

//! SORU: Ogrenciker dizisinde ogrenci isimleri saklanmaktadir. Ogrencileri aramamizi saglayacak bir fonksiyon yaziniz. Eger ogrenci bulunursa ogrencinin bilgilerini ekrana yazdiriniz. Eger ogrenci bulunamazsa "Ogrenci bulunamadi" yazdiriniz.

const students = [
  "ahmet",
  "mehmet",
  "ali",
  "veli",
  "ayse",
  "ahmet",
  "mehmet",
  "fatma",
];

const findStudent = (arr, name) => {
  let counter = 0;
  for (let i in arr) {
    if (name === arr[i]) {
      counter++;
    }
  }
  if (counter === 0) {
    console.log("Ogrenci bulunamadi");
  } else {
    console.log(`${name} adli ogrenci ${counter} kere bulundu`);
  }
};

// const adiniz = prompt("Ogrenci adi giriniz");
// findStudent(students, adiniz);

//* FOR OF LOOP

//* For in döngüsü ile aynı işlevi görür. Ancak for in döngüsü dizinin index numaralarına erişirken, for of döngüsü dizinin elemanlarına erişir.


//! Dizideki elemanların toplamını bulma

const sayilar11 = [-5, 15, 22, -4, 45, 78, -25];
let sonuc = 0;

for (let sayi of sayilar11) {
  sonuc += sayi;
}
console.log(sonuc);

//! Dizideki elemanları birleştirerek tek bir string haline getirme

const isimler = ["Ahmet", "Mehmet", "Ali", "Veli", "Ayşe", "Fatma"];
let isimlerBirlesik = "";

for (let isim of isimler) {
  isimlerBirlesik += isim + " ";
}
console.log(isimlerBirlesik);

//! Yukarıdaki örneği for of ile yapma

const findStudentOf = (arr, search) => {
  let counter = 0;
  for (let item of arr) {
    search === item && counter++;  //? Short circuiting
  }
  return !counter
    ? "Ogrenci bulunamadi"
    : `${search} adli ogrenci ${counter} kere bulundu`;
};

// const adiniz = prompt("Ogrenci adi giriniz");
// findStudentOf(students, adiniz);






