import axios from 'axios'
import authHeader from './auth-header'

import API from '../util/const'

class UserService {
    // getPublicContent() {

    // }

    getDataUser() {
        // console.log("el  tokeeen !!! : ", token)
        return axios.get(`${API.URI}/getOfficerData`, {headers: authHeader()})
    }

    getRecursosHumanosBoard() {
        return axios.get(`${API.URI}/dashboardRrhh`, {headers: authHeader()})
    }

    // getOfficerBoard() {

    // }
}

export default new UserService()