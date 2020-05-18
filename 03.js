// name: ucha 
// date: 18/05/2020
// lesson: ~03~


let myCar = {
    car: "BMW",
    model: "E46",
    color: "BLACK",
    date: 2004,
    horsepower: "ყველა",
    price: "6000$"
}

let myCar2 = {
    car: "MERCEDES",
    model: "CLK",
    color: "WHITE",
    date: 2012,
    horsepower: "ყველა",
    price: "13000$"
}

let myCar3 = {
    car: "AUDI",
    model: "TT",
    color: "GREY",
    date: 2007,
    horsepower: "ყველა",
    price: "9000$"
}

let loveCar = []

loveCar.push(myCar);
loveCar.push(myCar2);
loveCar.push(myCar3);

for(i = 0; i < loveCar.length; i++) {
    if(loveCar[i].price < "5000$") {
        console.log("ამ ფასში მანქანა ვერ მოიძებნა")
    } 
}
