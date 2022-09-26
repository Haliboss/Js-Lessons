//? OBJECTS ****************

//* Dizilerin sirali bellek bölgleridir. Bu yüzden dizilere indeksleme ile erişebiliriz.
//* Ancak daha karmasik veri tipleri için bu yöntem yeterli değildir. Object kullanilir.
//* Objectlerde indeksleme yerine key-value (property - value) çiftleri kullanilir.
//* Herhangi bir veriye erismek icin key(property) kullanilir.

//! 3 farkli yontemle object olusturulabilir.

//* 1. Object() class'indan new operatoru ile object olusturmak

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.model = "320d";
arabalar.yil = 2019;
arabalar.motor = "1.3";
arabalar.renk = "siyah";
arabalar.lpg = true;
console.log(arabalar);

//! Read
console.log(arabalar.marka); //? Notasyon
console.log(arabalar["model"]); //? Array Notasyonu

//! Square Bracket Notasyonu en büyük avantajı, değişkenlerle kullanılabilmesidir.
const key = "yil";
console.log(arabalar[key]); //? Dinamik key

arabalar.motor = "2.0";
console.log(arabalar);

//* 2.Yöntem Object constructor fonksiyonu ile object olusturmak

//! Object Constructor Fonksiyonu
function personel(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  console.log(this);
}

const person1 = new personel("Ahmet", 25, "Developer");
const person2 = new personel("Mehmet", 30, "Designer");
console.log(person1.name);
console.log(person2.job);

//* 3.Yöntem Object Literal ile object olusturmak (En çok kullanilan yöntem)

const worker = {
  name: "Ali",
  age: 35,
  job: "Manager",
  languages: ["Turkish", "English", "German"],
  salary: 5000,
};
console.log(worker);

console.log(worker.job);
console.log(worker["languages"]);
worker.languages.forEach((lang) => console.log(lang));

worker.dob = "1987";
worker.email = "halibos.com";
console.log(worker.languages[0]);
console.log(worker);

worker.salary *= 1.2; //! 20% zam
console.log(worker.salary);

//* Object Copy

//! 1.Yöntem Object.assign() methodu ile object copy yapmak (Shallow Copy - Sığ Kopya)
const person = worker;
console.log(person);

person.dob = 2000;
console.log(person);

//! Objec.create(), object.assign(), spread (...), concat(), slice() -> bunlar Shadow Copy yaparlar.

//! 2. Yöntem Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
console.log(JSON.stringify(worker));
console.log(deepCopyOfWorker);

//* OBJECT METHODS

const personal = {
  name: "Ali",
  dob: 1987,
  job: "Manager",
  languages: ["Turkish", "English", "German"],
  salary: 5000,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  // ozet: () => {
  //   console.log(this); //! window
  //   return `Name: ${this.name}, Age: ${this.calculateAge()}`;
  // },
};

//! Not: Arrow function kullanilirsa this keyword'u window objesini gösterir.
//! callback fonksiyonu olarak kullanmak ve bu fonksiyonlarda this keyword kullanim gereksinimini kaldirmak icin arrow function kullanilir.
//! Lexical context'e sahiptirler. Dolayisiyla this keyword'u parent scope'da tanimlanan this keyword'unu gösterirler.

console.log("DOB: ", personal.calculateAge());

//* OBJECT ITERATION

//* Nested Object

const people = {
  can: {
    name: "Can",
    age: 25,
    job: "Developer",
    drivingLicence: true,
  },
  ali: {
    name: "Ali",
    age: 30,
    job: "Designer",
    drivingLicence: false,
  },
  mehmet: {
    name: "Mehmet",
    age: 35,
    job: "Manager",
    drivingLicence: true,
  },
};
console.log(people);
console.log(people.ali.job);

//! Javascript de objeler default olarak iterable degildir. Ama for in ve for of loop ile iterable yapilabilir.
//! Objelerin key ve value'larını almak için Object.keys(), Object.values(), Object.entries() methodlari kullanilir.
//! Object.keys() -> Object'in key'lerini array olarak dondurur.
//! Object.values() -> Object'in value'larini array olarak dondurur.
//! Object.entries() -> Object'in key-value çiftlerini array olarak dondurur.

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//* for in loop ( for ( key in object ) )

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//* for of loop (for( x of iterable ))

for (let person of Object.keys(people)) {
  console.log(person);
  console.log(people[person]);
}

//* itere edebilmek için iterable olmalidir. Object.keys() methodu ile iterable yapilabilir.

for (let key of Object.keys(people)) {
  console.log(key);
}

for (let value of Object.values(people)) {
  console.log(value);
}

//! people objesindeli joblarini yazdiralim.

for (let value of Object.values(people)) {
  console.log(value.job);
}

for (let [k, v] of Object.entries(people)) {
  console.log(k, v.job);
}

//* ARRAY METOTLARI İLE OBJECT ITERATION

Object.keys(people).forEach((key) => console.log(key));
Object.values(people).forEach((value) => console.log(value.job));

//! job = developer olan kisinin ismini yazdiralim.

Object.values(people)
  .filter((value) => value.job === "Developer")
  .forEach((value) => console.log(value.name));

//* JSON => JavaScript Object Notation

const team = [
  {
    name: "Can",
    surname: "Korkmaz",
    age: 25,
    job: "Developer",
    drivingLicence: true,
  },
  {
    name: "Ali",
    surname: "Yilmaz",
    age: 30,
    job: "Designer",
    drivingLicence: false,
  },
  {
    name: "Mehmet",
    surname: "Kaya",
    age: 35,
    job: "Manager",
    drivingLicence: true,
  },
]; //* JSON formatinda bir array

console.log(team);
console.log(team[1]);

//! Ornek bir: team dizisindeki job'lari tek tek yazdiralim.

team.forEach((person) => console.log(person.job));

//! Ornek-2: age'leri bir artırarak yeni bir array olusturalim.

const newYas = team.map((yas) => yas.age + 1);
console.log(newYas);

//! Ornek 3: name ve surname'leri birlestirip buyuk harfe ceviren ve bunu fullName key'i olarak saklayan, ayni zamanda age degerleri 5 arttirarak age key'i olarak saklayan yeni bir array olusturalim.

const newTeam = team.map((person) => ({
  fullName: `${person.name} ${person.surname}`.toUpperCase(),
  age: person.age + 5,
}));

console.log(newTeam);


//! Ornek 4: yasi 27'den buyuk olanlarin adlarini yazdiralim.

team.filter((person) => person.age > 27).forEach((person) => console.log(person.name));

//! Ornek-5: 27 yasindan kucuk olanlarin isimlerini diziye saklayin.

const under27 = team.filter((person) => person.age <= 27).map((person) => person.name);
console.log(under27);

//! Ornek-6: ortalama yasi hesaplayiniz.

const avgYas = team.reduce((total, person) => total + person.age, 0) / team.length;
console.log(avgYas);