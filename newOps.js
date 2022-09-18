//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");
const car = {
    name: "BMW",
    model: 1990,
    engine: 1.6,
    colors: ["blue", "purple"],
};
//* 1.YONTEM (Classical)
const name1 = car.name;
const model1 = car["model"];
//* 2.YONTEM: DESTRUCTURING
const { name, colors, model, engine } = car;
console.log(name, model, engine, colors);
//* EXAMPLE: NESTED
const cars = {
    car1: {
        name: "BMW",
        model: 1990,
        engine: 1.6,
    },
    car2: {
        name: "Mercedes",
        model: 2022,
        engine: 2.0,
    },
};
//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
//*======================================================
//*  REST (...)
//* ======================================================
//*======================================================
//*  SPREAD (...)
//* ======================================================


const showName = (name, surname, ...other) => {
    const summary = `Name: ${name} Surname: ${surname} Other: ${other}`;
    console.log(summary);


showName("Can", "Canan", "Developer", "Engineer", "Teacher", "Student");

