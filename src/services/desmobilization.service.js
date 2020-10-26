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
        // aqui tambien tengo que pasar el id de la cautela para que se envie al correo
        // el codigo CODIGO del oficiniesta se pasara desde el servidor en la consulta
        // recuerda que aqui aun no vamos a firmar, sino que vamos a enviar indiscriminadamente a todos
        // YA CON EL CODIGO VAMOS A ACTUALIZAR LA FIRMA Y LE VAMOS A PASAR LA URL
        // LA URL TIENE QUE ESTAR, ENTONCES VAMOS A TRABALHAR CON EL VALOR DE "FIRM" PARA
        // QUE SE MUESTRE SOLO CUANDO SEA VERDADERO
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