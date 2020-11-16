import React, { useEffect, useState } from 'react'
import DesmobilizationService from '../../../../services/desmobilization.service'
import '../styles/desmo-document.css'

const DesmoDocument = ({
    idDesmo, name, position, dateEnd, code, area,
    OfficersFirm, liderFirm, reasonRes, workerFirm, rrhh
}) => {

    const [myFirms, setMyFirms] = useState([])

    useEffect(() => {
        function _getOneDesmobilization () {
            if(rrhh === false) {
                DesmobilizationService.getOneDesmobilization(idDesmo).then((result) => {
                    console.log("la desmobilizacion que estoy buscando : ", result.data[0].firmsOfficers)
                    setMyFirms(result.data[0].firmsOfficers)
                })
            }else {
                setMyFirms(OfficersFirm)
            }
        }

        _getOneDesmobilization()
    },[idDesmo,rrhh, OfficersFirm])

    return (
        <>
            <div className="document-des-container">
                <div className="document-body">
                    <div className="void-div" ></div>
                    <div className="document-head">
                        <div className="document-logo">
                            <img src={require('../../../../assets/images/logo.png')} className="image-user" alt="" />
                        </div>
                        <div className="document-title">
                            <h5><strong>DESMOVILIZACION DEL PERSONAL</strong></h5>
                        </div>
                        <div className="document-info">
                            <p className="document-info-paragraph">DOC.REF.:PR-RH-001-OPOS-S</p>
                            <p className="document-info-paragraph">REVISION: 02</p>
                            <p className="document-info-paragraph">FECHA: 05/10/2020</p>
                            <p className="document-info-paragraph">OPOS - Proyecto IIRSA SUR</p>
                        </div>
                    </div>
                    <div className="document-worker-information">
                        <div className="document-worker-information-left">
                            <div className="document-worker-information-camp">
                                <label htmlFor="name" className="name-left"><strong>APELLIDOS Y NOMBRES  </strong> </label>
                                <span className="dos-puntos"><strong>:</strong></span>
                                <p className="doc-worker-paragraph"> {name} </p>
                            </div>
                            <div className="document-worker-information-camp">
                                <label htmlFor="name" className="name-left"><strong>CARGO </strong> </label>
                                <span className="dos-puntos"><strong>:</strong></span>
                                <p className="doc-worker-paragraph"> {position} </p>
                            </div>
                            <div className="document-worker-information-camp">
                                <label htmlFor="name" className="name-left"><strong>FECHA DE CESE </strong> </label>
                                <span className="dos-puntos"><strong>:</strong></span>
                                <p className="doc-worker-paragraph"> {dateEnd} </p>
                            </div>

                        </div>
                        <div className="document-worker-information-right">
                            <div className="document-worker-information-camp">
                                <label htmlFor="name" className="name-right"><strong>CODIGO  </strong> </label>
                                <span className="dos-puntos"><strong>:</strong></span>
                                <p className="doc-worker-paragraph"> {code} </p>
                            </div>
                            <div className="document-worker-information-camp">
                                <label htmlFor="name" className="name-right"><strong>AREA </strong> </label>
                                <span className="dos-puntos"><strong>:</strong></span>
                                <p className="doc-worker-paragraph"> {area} </p>
                            </div>
                            <div className="document-worker-information-camp">
                                <label htmlFor="name" className="name-right"><strong>MOTIVO </strong> </label>
                                <span className="dos-puntos"><strong>:</strong></span>
                                <p className="doc-worker-paragraph"> {reasonRes} </p>
                            </div>
                        </div>

                    </div>

                    <h5 className="document-adeudos-title">ADEUDOS</h5>
                    <div className="document-adeudos">
                        <div className="void-div">

                        </div>
                        {myFirms.map((firm) =>
                            <div className="document-areas" key={firm.area}>
                                <p className="areas-title"><strong> {firm.area} </strong> </p>
                                <span className="dos-puntos-areas"><strong>:</strong></span>
                                <div className="document-areas-inputs">
                                    <div>
                                        <strong> DEBE : </strong>.....................................
                                    </div>

                                    <div>
                                        {firm.firm !== "pending" ?
                                            <img src={firm.firmUrl} className="firm-worker" alt="aqui ira la imagen" />
                                            :
                                            <p></p>
                                        }
                                        <strong>NO DEBE :</strong>.........................................
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="document-firm">
                        <div className="document-firm-lider">
                            {liderFirm ?
                                <img className="firm-bottom" src={liderFirm} alt="aqui ira la imagen" />
                                :
                                <p></p>
                            }

                            <p><strong>____________________________</strong> </p>
                            <p className="text">LIDER RESPONSABLE</p>
                        </div>
                        <div className="document-firm-worker">
                            {workerFirm ?
                                <img className="firm-bottom" src={liderFirm} alt="aqui ira la imagen" />
                                :
                                <p></p>
                            }
                            <p><strong>____________________________</strong> </p>
                            <p className="text">TRABAJADOR</p>
                        </div>
                    </div>
                    <p className="text-footer">LA PRESENTE TIENE CARÁCTER DE DECLARACION JURADA, EL NO CUMPLIMIENTO
                    DE ESTE DOCUMENTO FACULTA A LA EMPRESA A HACER EL RESPECTIVO DESCUENTO DE LAS PERTENENCIAS
                    DEL TRABAJADOR.
                </p>
                </div>
            </div>


        </>
    )
}

export default DesmoDocument