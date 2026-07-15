fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json()) // Преобразуем ответ в JSON
 .then(data => console.log(data))    // Работаем с полученными данными
 .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку

 const data = { title: "Новый пост", body: "Содержимое поста", userId: 1 };

fetch('https://jsonplaceholder.typicode.com/posts', {
 method: 'POST', // Указываем метод
 headers: {
   'Content-Type': 'application/json' // Указываем тип данных
 },
 body: JSON.stringify(data) // Преобразуем объект в JSON-строку
})
 .then(response => response.json())
 .then(data => console.log('Успех:', data))
 .catch(error => console.error('Ошибка:', error));

 fetch('https://jsonplaceholder.typicode.com/nonexistent')
 .then(response => {
   if (!response.ok) {
     throw new Error('Ошибка сети: ' + response.status);
   }
   return response.json();
 })
 .then(data => console.log(data))
 .catch(error => console.error('Обработанная ошибка:', error));

let updatedData

fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json()) // Преобразуем ответ в JSON
 .then(data => { 
    updatedData=data
    updatedData.title = "title"

fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'PUT',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify(updatedData)
})
 .then(response => response.json())
 .then(data => console.log('Обновлено:', data))})   // Работаем с полученными данными
 .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку


 fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json()) // Преобразуем ответ в JSON
 .then(data => {
  data.title = 'newTitle'
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'PUT',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify(data)
})
 .then(response => response.json())
 .then(data => console.log('Обновлено:', data))
 .catch(error => console.error('Ошибка:', error));
 })    // Работаем с полученными данными
 .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку


 fetch('https://jsonplaceholder.typicode.com/posts/1', {
   method: 'DELETE'
 })
   .then(() => console.log('Пользователь удален'))
   .catch(error => console.error('Ошибка:', error));

   

async function fetchData(){
  try{
    const response = await
fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log(data)
  }catch(error){
  console.log('Mistake',error)
 }
}
fetchData()



  fetch('https://jsonplaceholder.typicode.com/comments', {
 method: 'GET',
 headers: {
   'User-Agent': 'chrome',
   'Authorization': '12345678'
 },
}).then(response => response.json())
 .then(data => console.log('Data:', data))
 .catch(error => console.error('Ошибка:', error));
 










