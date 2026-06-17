let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits);

console.log(fruits[0])
console.log(fruits[2])
fruits.push("Pear")
console.log(fruits)

let deleteLast = fruits.pop()
let deleteFirst = fruits.shift()
console.log(deleteLast)
console.log(deleteFirst)

fruits.forEach((element)=>
console.log(element))

let lengths = fruits.map(i => i.length)
console.log(lengths)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumbers = numbers.filter(num=>num%2===0)
console.log(evenNumbers)

let sum = numbers.reduce((acc, num)=>acc + num,0)
console.log(sum)

let find = numbers.find(x => x>5)
console.log(find)


arr1 = [1,2,3]
arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3)

let hasBanana = fruits.includes("Banana")
console.log(hasBanana)

let reverse = fruits.reverse()
console.log(reverse)
