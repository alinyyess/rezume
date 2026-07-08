const button = document.querySelector('#jsButton')

button.addEventListener('click',(event) => {
    console.log('Event processed by JS:', event)
})

const box = document.querySelector('#myDiv')

box.addEventListener('click',() =>{
    box.style.backgroundColor = 'blue'
})

box.addEventListener('mouseover', () =>{
    console.log('Element is clicked')
})

const input = document.querySelector('#textInput')

input.addEventListener('keydown',(event) =>{
    console.log('Key is clicked:', event.target.value)
} )

const link = document.querySelector('#myLink')

link.addEventListener('click', (event) =>{
    event.preventDefault(console.log("Переход по ссылке отменен"))
})

const list = document.querySelector('#list')

list.addEventListener('click', (event) =>{
    console.log('This element is clicked:', event.target.textContent)
})


const input2 = document.querySelector('#keyboardInput')

input2.addEventListener('keydown',(event) =>{
    console.log('Key is clicked:', event.code)
} )


