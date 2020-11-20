import axios from 'axios'
import authHeader from './auth-header'

import API from '../util/const'

class ReportService {
 
    getAllReports () {
        return axios.get(`${API.URI}/getAllReports`, {headers: authHeader()})
    }

    // getAllDesmobilizations(codeOfficer) {
    //     // console.log("vamos a obtener con este codigo del ofinista : ", codeOfficer)
    //     return axios.get(`${API.URI}/getAllDesmobilizations/${codeOfficer}`, { headers: authHeader() })
    // }

}

export default new ReportService()


