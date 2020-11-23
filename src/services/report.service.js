import axios from 'axios'
import authHeader from './auth-header'

import API from '../util/const'

class ReportService {
 
    getAllReports () {
        return axios.get(`${API.URI}/getAllReports`, {headers: authHeader()})
    }

    getOneReport (idReport) {
        return axios.get(`${API.URI}/getOneReport/${idReport}`, {headers: authHeader()})
    }
}

export default new ReportService()


