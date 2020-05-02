import * as axios from "axios"

let instance = axios.create({
    baseURL: '/api/',
    headers: {'Content-Type': 'application/json'}
  })

export let API = {
    getContacts(page, limit, search){
        return instance.get(`contacts/?page=${page}&limit=${limit}&search=${search}`).then(response => response.data)
    },
    login(email, password){
        const body = {password, email}
        return instance.post('auth/login', body).then(response=>response.data)
    },
    register(email, password){
        const body = {password, email}
        return instance.post('auth/register', body).then(response=>response.data)
    },
}
/*
 щоб кожен раз не писати базові параметри для відпраки запиту ми записуємо їх в змінну instance та використовуємо її в подальшому
 baseURL: '/api/'-базове посилання через яке надається доступ до запитів на сервері
 headers: {'Content-Type': 'application/json'}-означає що відправляємо запит в форматі джейсону
всі звертання до серверу записуються в обьект АПІ і визиваються як методи з певного обьекту

якщо ми не пишемо ретьорн перед інстансами то ми будемо зразу виконувати інстанс
але не будемо повертати проміс з функції запиту який повертається інстансом
*/
