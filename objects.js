let person ={
    name : "Alina",
    age : 16,
    city : "Almaty"
};
console.log(person);

console.log(person.name)
console.log(person.age)
person.city = "Astana"


person.greet = function(){
    console.log("Hi, my name is " + this.name + ", I'm " + this.age + " years old!")
}
person.greet()


let obj1 ={
    a: 10,
    b:20
};

let obj2 ={
    a: 10,
    b: 20
};

console.log(obj1==obj2)
console.log(obj1===obj2)


let book ={
    title : "The Picture of Dorian Grey",
    author : "Oscar Wilde",
    details : {
        year : 1890,
        pages : 436
    }
}
Object.assign(book)
book.details.year = 1891
console.log(book)


let calculator ={
    a: 5,
    b: 6 
}

calculator.sum = function(){
    console.log(this.a + this.b)
}
calculator.multiply = function(){
    console.log(this.a * this.b)
}
calculator.sum()
calculator.multiply()


const car ={
    brand : "Dior",
    model : "Adriana Lima"
}

car.brand = "Gucci"
console.log(car)
