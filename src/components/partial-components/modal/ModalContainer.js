import React from 'react'
import Modal from 'react-modal'
import DesmoDocument from '../../system/desmobilization-panel/pending-desmo/DesmoDocument'
import WorkerPhoto from '../../system/desmobilization-panel/pending-desmo/WorkerPhoto'
import './modal-container.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: '10%',
        height: '90%',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)'
    }
}

Modal.setAppElement('#root');

const ModalContainer = ({ modalOpen, setModalOpen, desmo, match, desmobilizaciones, setDesmobilizaciones }) => {

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >

            <button onClick={closeModal}>Close</button>

            {desmo ?
                <>
                    <div className="perfil-des-container">
                        <DesmoDocument
                            idDesmo={desmo._id}
                            // id={desmo.workers[0]._id}
                            name={desmo.workers[0].fullname}
                            position={desmo.workers[0].position}
                            dateEnd={desmo.workers[0].dateEnd}
                            code={desmo.workers[0].code}
                            area={desmo.workers[0].area}

                            OfficersFirm={desmo.OfficersFirm}
                            liderFirm={desmo.liderFirm}
                            reasonRes={desmo.reasonRes}
                            workerFirm={desmo.workerFirm}
                            rrhh={false}
                        />
                        <WorkerPhoto
                            name={desmo.workers[0].fullname}
                            perfil={desmo.workers[0].perfil}
                            idDesmo={desmo._id}
                            rrhh={false}
                            setModalOpen={setModalOpen}
                            setDesmobilizaciones={setDesmobilizaciones}
                            desmobilizaciones={desmobilizaciones}
                            codeOfficer={match.params.codeOfficer}
                            modal={true}
                        />
                    </div>
                </>

                :
                <p>espera...</p>
            }

        </Modal>
    )
}

export default ModalContainer