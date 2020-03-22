import { API } from "../api"

export let useLogin = (email, password) => {
    return API.login(email, password)
}