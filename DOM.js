let greeting = document.getElementById("message")
greeting.textContent = "Welcome to JavaScript!";

let newColor = document.getElementsByClassName("box")
console.log(newColor)
for(let i=0; i<newColor.length; i++){
    newColor[i].style.backgroundColor = "red"
}


let newText = document.querySelector("#text")
newText.textContent = "new text"

let newStyle = document.querySelectorAll(".box2")
for(let x=0; x<newStyle.length; x++){
newStyle[x].style.color = "blue"
}

let highlight = document.querySelectorAll(".highlight")
for(let y=0; y<highlight.length; y++){
    highlight[y].style.color = "brown"
}




