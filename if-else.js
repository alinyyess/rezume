let theNumber = prompt("Enter the number:");

if (theNumber > 10){
    console.log("Число больше 10");
} else{
    console.log("Число меньше или ровно 10");
};

let isConfirmed = confirm("Хотите ли вы удалить этот файл?");

if (isConfirmed){
    console.log("Файл удален");
}else{
    console.log("Удаление отменено");
};

let age = prompt("How old are you?");

if (age < 18){
    console.log("You are still a teenager");
}else if (age >= 18){
    console.log("You are an young adult");
}else if (age <= 30){
    console.log("You are an young adult");
}else if(age > 30){
    console.log("You are an adult")
}

let num = prompt("Enter your number:");

let numType = (num%2==0)?"Even number":"Odd number";
console.log(numType)

let dayNum = prompt("What day of the week is it today?");
let message;


switch(dayNum){
    case "1":
        message ="Today is monday";
        break;
    case "2":
        message ="Today is tuesday";
        break;
    case "3":
        message ="Today is wednesday";
        break;
    case "4":
        message ="Today is thursday";
        break;   
        case "5":
        message ="Today is friday";
        break;
    case "6":
        message ="Today is saturday";
        break;
    case "1":
        message ="Today is sunday";
        break;
    default:
        message="Incorrect number "           
}
console.log(message);

let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

if(a==b){
    console.log("They are equal");
}else{
    const result = (a>b)?"First number is greater":"Second number is greater";
    console.log(result)
}


