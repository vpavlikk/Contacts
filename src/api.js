import * as axios from "axios"

let instance = axios.create({
  baseURL: '/api/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
// console.log(instance.defaults.baseURL);
export let API = {
  login(email, password) {
    const body = {
      password,
      email
    }
    return instance.post('auth/login', body).then(
      response => response
    )
  },
  register(email, password) {
    const body = {
      password,
      email
    }
    return instance.post('auth/register', body).then(
      response => response
    )
  },
  addContact(cardEditFormDataObject) {
    const body = cardEditFormDataObject
    return instance.post('contacts/addNewContact', body).then(
      response => response.data
    )
  },
  checkIsLoggedIn() {
    return instance.get('auth/me').then(
      response => response.data
    )
  },
  logOut() {
    return instance.post('auth/logout').then(
      response => response.data
    )
  },
  getContacts(page, limit) {
    return instance.get(`contacts/?page=${page}&limit=${limit}`).then(
      response => response.data
    )
  },
  findContacts(search) {
    return instance.get(`contacts/?search=${search}`).then(
      response => response.data
    )
  },
  deleteContact(id) {
    return instance.delete(`contacts/deleteContact/?id=${id}`).then(
      response => response.data
    )
  },
  updateContact(contactChangeFormDataObject) {
    const body = contactChangeFormDataObject
    return instance.put('contacts/updateContact', body).then(
      response => response.data
    )
  }
}

/*
 щоб кожен раз не писати базові параметри для відпраки запиту ми записуємо їх в змінну instance та використовуємо її в подальшому
 baseURL: '/api/'-базове посилання через яке надається доступ до запитів на сервері
 headers: {'Content-Type': 'application/json'}-означає що відправляємо запит в форматі джейсону
всі звертання до серверу записуються в обьект АПІ і визиваються як методи з певного обьекту

якщо ми не пишемо ретьорн перед інстансами то ми будемо зразу виконувати інстанс
але не будемо повертати проміс з функції запиту який повертається інстансом
*/
