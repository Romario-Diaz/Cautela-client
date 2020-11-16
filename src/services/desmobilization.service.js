import axios from 'axios'
import authHeader from './auth-header'

import API from '../util/const'

class DesmobilizationService {
    getAllDesmobilizations(codeOfficer) {
        console.log("vamos a obtener con este codigo del ofinista : ", codeOfficer)
        return axios.get(`${API.URI}/getAllDesmobilizations/${codeOfficer}`, { headers: authHeader() })
    }

    getOneDesmobilization(idDesmo) {
        console.log("el id de la resmobilizacion", idDesmo)
        return axios.get(`${API.URI}/getOneDesmobilization/${idDesmo}`, { headers: authHeader() })
    }

    sendDocumentToOfficers(name, perfil, idDesmo, codeOfficer) {
        console.log("el dcodigo del oficiista : ", codeOfficer)
        return axios.post(`${API.URI}/sendDocumentToOfficers`, { name: name, perfil: perfil, idDesmo: idDesmo, codeOfficer: codeOfficer }, { headers: authHeader() })
    }

    firmDocument(codeOfficer, idDesmo) {
        console.log("se va a firmar el documento")
        return axios.post(`${API.URI}/firmDocument`, {codeOfficer: codeOfficer, idDesmo: idDesmo}, { headers: authHeader() })
    }

    cancelDesmobilization(id) {
        return axios.delete(`${API.URI}/cancelDesmobilization/${id}`, { headers: authHeader() })
    }

    findWorker(dni, reason) {
        return axios.post(`${API.URI}/findWorker`, { dni: dni, reason: reason }, { headers: authHeader() })
    }
}

export default new DesmobilizationService()



    // newDesmobilizationDocument(name, perfil) {
    //     // aqui tambien tengo que pasar el id de la cautela para que se envie al correo
    //     // el codigo CODIGO del oficiniesta se pasara desde el servidor en la consulta
    //     // recuerda que aqui aun no vamos a firmar, sino que vamos a enviar indiscriminadamente a todos
    //     // YA CON EL CODIGO VAMOS A ACTUALIZAR LA FIRMA Y LE VAMOS A PASAR LA URL
    //     // LA URL TIENE QUE ESTAR, ENTONCES VAMOS A TRABALHAR CON EL VALOR DE "FIRM" PARA
    //     // QUE SE MUESTRE SOLO CUANDO SEA VERDADERO
    //     return axios.post(`${API.URI}/newDesmobilizationDocument`, {name: name, perfil: perfil}, {headers: authHeader()})
    // }