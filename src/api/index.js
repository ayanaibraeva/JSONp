// В папке index.js, как правило содержится сама base_url сcылка

const baseURL = 'https://jsonplaceholder.typicode.com'
export const API = {
    //создаем ключ get, передаем туда анонимную функцию.
    // route - это параметр нашего get, при вызове get, мы заменяем его на реальный атрибут
    get: (route) => fetch(`${baseURL}/${route}`)
        .then(res => res.json())
}