function greet(greeting){
    console.log("Hello,world!")
}
greet()

function sayHello(name){
    console.log("Hello, "+name+"!")
}
sayHello("Alina")
sayHello("Linara")

function sum(num1, num2){
   return num1+num2
}
console.log(sum(5,6))


function isEven(a){
    if(true){
        let evenNum = a%2==0
        return(evenNum)
    }
}
console.log(isEven(6))
console.log(isEven(7))

function max(x,y){
    if(x>y){
        return("First number is greater")
    }else if(x==y){
        return("They are equal")
    }else{
        return("Second number is greater")
    }
}
console.log(max(8,9))
console.log(max(50,20))
console.log(max(11,11))

function getInitials(){
    let name = prompt("Your name: ")
    let surname = prompt("Your surname: ")
    console.log(name[0]+"."+surname[0]+".")
}
getInitials()

function square(n){
    let nsqr = n*n
    return nsqr
} 
square(2)

function cube(n){
    let ncub = n * square(n)
    return ncub
}
console.log(square(5))
console.log(cube(5))

const add=(num1,num2)=>(num1+num2)
console.log(add(5,10))