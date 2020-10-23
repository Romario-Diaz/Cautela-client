import axios from 'axios'
import authHeader from './auth-header'

import API from '../util/const'

class DesmobilizationService {
    getAllDesmobilizations() {

    }

    getOneDesmobilization() {

    }

    sendDocumentToOfficers(name, perfil) {
        return axios.post(``)
    }

    newDesmobilizationDocument(name, perfil) {
        return axios.post(`${API.URI}/newDesmobilizationDocument`, {name: name, perfil: perfil}, {headers: authHeader()})
    }

    cancelDesmobilization(id) {
        console.log("el id con el que vamos a borrar la desmobilizacion : ", id)
        return axios.delete(`${API.URI}/cancelDesmobilization/${id}`, {headers: authHeader()})
    }

    // probablemente se tenga que buscar con algo mas adicional que sea el codigo o dni
    findWorker (dni, reason) {
        return axios.post(`${API.URI}/findWorker`, {dni: dni, reason: reason}, {headers: authHeader()})
    }
}

export default new DesmobilizationService()