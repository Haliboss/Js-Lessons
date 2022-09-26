//? DİZİ TANIMLAMA

//* DEKLERASYON YÖNTEMİ

const isimler = ["ahmet", "ismet", "can", "canan"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

//* OBJECT CONSTUCTOR YÖNTEMİ

const diller = new Array("C#", "Java", "Python", "Php");
console.log(diller);
console.log(typeof diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

const numbers1 = new Array(10);
console.log(numbers1); //! 10 elemanlı boş bir dizi oluşturur

//* ARRAY.OF YÖNTEMİ

const veriler = Array.of(1, 2, 3, 4, 5);
console.log(veriler);

const veri = Array.of("Deneme");
console.log(veri);

//? DİZİDEN VERİOKUMA-YAZMA (İNDİSLEME)

console.log(diller[1]);
const go = diller[2];
console.log(go);

console.log(isimler[isimler.length - 1]);

console.log(isimler.at(-1)); //! -1. indisteki elemanı verir ve bu metotta -indeks kullanılabilir

//*  DİZİYE VERİ YAZMA

// const isimler = ["ahmet", "ismet", "can", "canan"];

isimler[0] = "mehmet";
console.log(isimler);

console.log(numbers);
console.log(numbers.at(-1));
numbers[numbers.length - 1]++;
console.log(numbers);

const yaslar = [10, 20, 30, 40, 50];
const kisiler = ["ahmet", "ismet", 2022, 2022 - 1987, true, yaslar];

console.log(kisiler);

console.log(kisiler[5][2]);
kisiler[5][2]++;
console.log(kisiler[5][2]);

//? DİZİYİ DEĞİŞTİRİEN METOTLAR (mutator methods)

//* POP - SON ELEMANI SİLME

const arabalar = ["bmw", "mercedes", "audi"];
console.log(arabalar.pop());
console.log(arabalar);

//* PUSH - SONA ELEMAN EKLEME

const n = arabalar.push("volvo");
console.log(arabalar, n);

//* UNSHIFT - BAŞA ELEMAN EKLEME

const n1 = arabalar.unshift("renault");
console.log(arabalar, n1);

//* SHIFT - BAŞTAN ELEMAN SİLME

const n2 = arabalar.shift();
console.log(arabalar, n2);

//* SPLİCE - BELİRLENEN İNDEKSTEN ELEMAN EKLEME VEYA SİLME

//! 1. parametre: eklenecek elemanın veya silinecek elemanın başlangıç indeksi
//! 2. parametre: 0 ise ekleme, 1 ise silme ve üzerine yazma
//! 3. parametre: eklenecek eleman,

const arabalar1 = ["bmw", "mercedes", "audi"];
arabalar1.splice(1, 0, "volvo", "renault");
console.log(arabalar1);

arabalar1.splice(1, 1, "tofas", "mazda");
console.log(arabalar1);

//* REVERSE - DİZİYİ TERS ÇEVİRME

arabalar1.reverse();
console.log(arabalar1);

//* SORT - DİZİYİ SIRALAMA

isimler.sort();
console.log(isimler);

const sayilar = [111, 5, 3, 2, 4, 6, 7777, 8, 9, 10];
sayilar.sort();
console.log(sayilar);

sayilar.sort((a, b) => a - b); //* küçükten büyüğe sıralama
console.log(sayilar);

sayilar.sort((a, b) => b - a); //* büyükten küçüğe sıralama
console.log(sayilar);

//* FILL - DİZİYİ BELİRLENEN DEĞERLE DOLDURMA

const array1 = [1, 2, 3, 4, 5];
array1.fill(0);
console.log(array1);

array1.fill(1, 2, 4);
console.log(array1);

array1.fill(-1, 1); //* 1. indisten başlayarak doldurur
console.log(array1);

//? DİZİYİ DEĞİŞTİRMEYEN METOTLAR (İMMUTATOR METHODS)

const sayi1 = [3, 5, 2, "2", "üc", 2, "bes", 5];

//* INCLUDES - DİZİDE BELİRLENEN DEĞERİ ARAMA (true/false, key sensitive)

console.log(sayi1.includes(2));
console.log(sayi1.includes("5"));

//* INDEXOF, LASTINDEXOF - DİZİDE BELİRLENEN DEĞERİN İNDEKSİNİ BULMA

console.log(sayi1.indexOf(2)); //! ilk bulduğu indeksi verir
console.log(sayi1.lastIndexOf(2)); //! son bulduğu indeksi verir

//* JOIN - DİZİNİN ELEMANLARINI BİRLEŞTİRİP STRING YAPMA

console.log(sayi1.join(" - "));
console.log(sayi1.join(""));
console.log(sayi1.join(" "));
console.log(sayi1.join()); //* default virgülle ayırır
console.log(typeof sayi1);

//* TOSTRING - DİZİYİ STRING YAPMA

console.log(sayi1.toString());

//* SLICE - DİZİYİ PARÇALAMA

console.log(arabalar1);
console.log(arabalar1.slice(0, 3));

const yeniArabalar = arabalar1.slice(-2);
console.log(yeniArabalar, arabalar1);

const yeniArabalar1 = arabalar1.slice(1, 3);
console.log(yeniArabalar1, arabalar1);

//* CONCAT - DİZİLERİ BİRLEŞTİRME

const yazilar = ["merhaba", "nasılsın", "iyimisin"];
const sayilar10 = [1, 2, 3, 4, 5];
const combineArray = yazilar.concat(
  true,
  sayilar10,
  ["iyiyim", "sen"],
  [[1, 2, 3]]
);
console.log(combineArray);

//* EVERY - TÜM DİZİYİ İTERE EDER, TÜM ELEMANLAR BELİRLENEN KOŞULA UYUYORSA TRUE DÖNER

const yasArr = [18, 20, 22, 24, 26, 28, 30];
const check = yasArr.every((yas) => yas >= 18); //* tüm elemanlar 18'den büyük mü?
console.log(check);

check
  ? console.log("Tüm elemanlar 18'den büyük")
  : console.log("Tüm elemanlar 18'den büyük değil");

//* SOME - TÜM DİZİYİ İTERE EDER, ELEMANLARDAN EN AZ BİRİ BELİRLENEN KOŞULA UYUYORSA TRUE DÖNER

const check1 = yasArr.some((yas) => yas > 25); //* en az bir eleman 25'ten büyük mü?
console.log(check1);

check1
  ? console.log("En az bir eleman 25'ten büyük")
  : console.log("Hiç bir eleman 25'ten büyük değil");

//* FIND - DİZİYİ İTERE EDER, İLK BULDUĞU ELEMANI DÖNER (undefined dönerse eleman yok demektir)

const eleman = yasArr.find((yas) => yas > 25); //* 25'ten büyük ilk elemanı bul
console.log(eleman);

const eleman1 = yasArr.findLast((yas) => yas > 25); //* 30'dan büyük son elemanı bul
console.log(eleman1);

//* FINDINDEX - DİZİYİ İTERE EDER, İLK BULDUĞU ELEMANIN İNDEKSİNİ DÖNER (undefined dönerse eleman yok demektir)

const names = ["ali", "veli", "ayşe", "fatma", "ahmet"];
const findNames = names.findIndex((name) => name === "ayşe"); //* ayşe'nin indeksini bul
console.log(findNames);

const foundIndex = yasArr.findIndex((yas) => yas > 25); //* 25'ten büyük ilk elemanın indeksini bul
console.log(foundIndex);
