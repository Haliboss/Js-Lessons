//* OBJECT DESTRUCTURING

//* verileri ayirmamizi saglar.

const car = {
  name: "BMW",
  model: 1990,
  engine: 2.0,
  colors: ["red", "blue", "green"],
};

//* 1.yöntem (classic)
const name1 = car.name;
const model1 = car.model;

//* 2.yöntem (destructuring)
const { name, model, colors } = car;
console.log(name, model, colors);

//! EXAMPLE: NESTED

const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
    colors: ["red", "blue", "green"],
  },
  car2: {
    name: "Mercedes",
    model: 1988,
    engine: 2.0,
    colors: ["red", "blue", "green"],
  },
};

const { car1, car2 } = cars;
console.log(car1, car2);

const { name: car1Name, model: car1Model } = car1;
const { name: car2Name, model: car2Model } = car2;
console.log(car1Name, car1Model, car2Name, car2Model);

//! EXAMPLE

const team = [
  {
    name: "John",
    age: 25,
    salary: 5000,
    position: "developer",
  },
  {
    name: "Jane",
    age: 30,
    salary: 8000,
    position: "designer",
  },
  {
    name: "Mark",
    age: 35,
    salary: 10000,
    position: "manager",
  },
];

//* 1.yöntem / Classic
team.forEach((p) => {
  console.log("Name:", p.name);
  console.log("Age:", p.age);
  console.log("Salary:", p.salary);
  console.log("Position:", p.position);
});

//* 2.yöntem / Destructuring
team.forEach((p) => {
  const { name, age, salary, position } = p;
  console.log("***************");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Salary:", salary);
  console.log("Position:", position);
});

//* Function

const getInfo = () => {
  return {
    id: 1,
    productName: "Laptop",
    price: 5000,
  };
};

console.log(getInfo());
const { productName, price } = getInfo();
console.log("Product Name:", productName);
console.log("Product Price:", price);

//! Fonsiyonlarin parametreleri destructuring ile alinabilir.
const calculate = () => {
  console.log(price * 1.18);
};

calculate({ id: 1, price: 3000 });

//* DESTUCTURING ARRAY

const names = ["John", "Jane", "Mark", "James"];

//* Classical way

const john = names[0]; //* indexing

const [p1, p2, , p4] = names; //* destructuring
console.log(p1, p2, p4);

//* REST OPERATORÜ ******* geriye kalanlari alir

//? Rest operatorü kullanıcı tarafindan girilen degerleri dizi icerisinde tutar. Cesitli kullanim alanlari vardir.
//? Bir dizi veya object'teki bazi degelerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglamaktadir.

//* REST: Arrays - Sira onemlidir - Sonda olmalidir.

const autos = ["BMW", "Mercedes", "Volvo", "Audi", "Ford"];

const [BMW, Mercedes, ...restAutos] = autos;
console.log(BMW, Mercedes);
console.log(restAutos);

//* REST: Objects

const person = {
  pname: "John",
  age: 25,
  salary: 5000,
  position: "developer",
};

const { pname, age, salary, position, ...restPerson } = person;
console.log(pname);
console.log(restPerson);

//? Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilir.

const sum = (x, y) => x + y;

console.log(sum(1, 2, 3, 4, 5, 6)); //! hata vermez fakat sadece 2 argumani toplar

const sum2 = (...numbers) => {
  console.log(numbers); //? (4) [1, 2, 3, 4]
  return numbers.reduce((a, b) => a + b, 0);
};

console.log("Sum Of Numbers: ", sum2(1, 2, 3, 4)); //? 10 (diziye cevirip öyle topluyor)

const showName = (name, surname, ...titles) => {
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary);
};

showName("John", "Doe", "Developer", "Instr", "Professor", "Dad");

//* SPREAD OPERATORU ******* ayri ayri elemanlari alir

//* Spread operatoru ise iterables olan bir elemani biresysel elemanlara ayirir.

//* Array concatination
const flyingVehicle = ["Aircraft", "Helicopter", "Balloon"];
const automobiles = ["Car", "Truck", "Bus"];
// const allVehicles = [flyingVehicle, automobiles]; //? 2 boyutlu dizi
const allVehicles = [...flyingVehicle, ...automobiles]; //? 1 boyutlu dizi
console.log(allVehicles);

//* Example
const fruits = ["Apple", "Orange", "Banana"];

const citrus = ["Lemon", ...fruits, "Lime", "Grapefruit"];
console.log(citrus);

//* String spread
let str = "Hello FS12";
console.log([...str]); //? herbir karakter dizi elementi olarak alinir
const charArray = [...str];
console.log(charArray, str);

charArray[0] = "X";
console.log(charArray, str); //? str degismez

//* Max() - Dizileri fonksiyonlara parametre olarak gondermek icin kullanilir.
console.log(Math.max(1, 3, 5, 2, 10));
const nums = [1, 3, 5, 2, 10];
console.log(Math.max(...nums));

//* Array Copy
const myNumbers = [1, 2, 3, 4, 5];
const herNumbers = [-1, ...myNumbers, 7];
console.log(herNumbers);
const hisNumbers = [...herNumbers];
hisNumbers.push(101);
console.log("My Numbers: ", myNumbers, "His Numbers: ", hisNumbers);


//* Object Copy
const myObj = { a: 1, b: 2, c: 3 };
const herObj = { a: 2, z:4, k: 4 };
const copyObj = { ...myObj };
console.log(copyObj);
copyObj.a = "11";
console.log(copyObj, myObj);

const combineObj = { ...myObj, ...herObj };
console.log(combineObj); //? Son gördüğü a degerini alir
const combineObj1 = { ...herObj, ...myObj };
console.log(combineObj1); //? sonuncu a degeri gecerli