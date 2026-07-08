localStorage.setItem('greeting', 'Hello, World!')
console.log(localStorage.getItem('greeting'))

localStorage.removeItem('greeting')
console.log(localStorage.getItem('greeting'))

const data ={
    name: 'Emin',
    age: 7,
    gender: 'boy'
}
const dataJSON = JSON.stringify(data)
localStorage.setItem('data', dataJSON)
const storedDataJSON = localStorage.getItem('data')
const parsedData = JSON.parse(storedDataJSON)
console.log(parsedData)

const storedData2JSON = localStorage.getItem('data')
const parsedData2 = JSON.parse(storedData2JSON)
 parsedData2.country = 'Kazakhstan'
const dataJSON2 = JSON.stringify(data)
localStorage.setItem('data', dataJSON2)
console.log(parsedData2)

if(localStorage.getItem('data')){
    console.log(dataJSON)
}else{
    const newData ={
        name: 'Alina',
        age: 16
    }
    const newDataJSON = JSON.stringify(newData)
localStorage.setItem('newData', newDataJSON)
const storedNewDataJSON = localStorage.getItem('newData')
const parsedNewData = JSON.parse(storedNewDataJSON)
console.log(parsedNewData)
}

localStorage.clear()
console.log(localStorage.getItem('newData'))

const tasks = [
    {id:1, title:'washDishes', completed:true},
    {id:2, title:'doHomework', completed:false}
]
const tasksJSON = JSON.stringify(tasks)
localStorage.setItem('tasks', tasksJSON)
const storedTasksJSON = localStorage.getItem('tasks')
const parsedTasks = JSON.parse(storedTasksJSON)
console.log(parsedTasks)

const storedTasks2JSON = localStorage.getItem('tasks')
const parsedTasks2 = JSON.parse(storedTasks2JSON)
parsedTasks2[1].completed = true
const tasks2JSON = JSON.stringify(parsedTasks2)
localStorage.setItem('tasks', tasks2JSON)
const storedTasks3JSON = localStorage.getItem('tasks')
const parsedTasks3 = JSON.parse(storedTasks3JSON)
console.log(parsedTasks3)


