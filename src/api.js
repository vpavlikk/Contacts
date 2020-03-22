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