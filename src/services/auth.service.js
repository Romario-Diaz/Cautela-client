import axios from 'axios'
import API from '../util/const'

class AuthService {
    login (user, password) {
        return axios.post(`${API.URI}/signIn`, {
            user: user, password: password
        }).then(response => {
            if(response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }else {
                console.log(response.data.message)
            }
            return response.data
        })
    }

    logout() {
        localStorage.removeItem("user")
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"))
    }
}

export default new AuthService()