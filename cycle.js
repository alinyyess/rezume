let count = 1
while(count<11){
    console.log(count)
    count++
}


let countt = 0
while(countt<11){
    countt++
    if(countt===5){
        continue
    }
    else if(countt===8){
        break
    }
    console.log(countt)
}

let dowh = 1
do{
    console.log(dowh)
    dowh++
}while(dowh<6)

let a = parseInt(prompt("Enter your number: "))

while(true){
    if(a===10){
        break
    }
    a = parseInt(prompt("Enter your number: "))
    console.log("Cycle is infinite")
}

for(let i = 1; i<11; i++){
    console.log(i)
}


let ii = 0
for(;;){
    ii++
    if(ii>100){
        break
    }
    console.log(ii)
}


let array = [1,2,3,4,5]
for(let x = 0; x<array.length; x++){
    console.log(array[x])
}


//Используем фор,когда количество итераций известно заранее, например итерирование по массиву
//Используем уайл, когда количество итераций неизвестно, например ожидание пользовательского ввода

for(let y = 10; y; y--){
    console.log(y)
}

for(let b = 1; b<11; b++){
    if(b%2==0){
        continue
    }
    console.log(b)
}