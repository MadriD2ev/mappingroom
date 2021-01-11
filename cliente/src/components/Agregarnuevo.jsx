import React from 'react'
import useModal from '../hooks/useModal'
import Modal from './Modal'

const Agregarnuevo = () => {

    const [isOpenModal, openModal, closeModal] = useModal();

    return (
        <div className="alert alert-dark my-4" role="alert">
            <button 
                className="btn btn-light" 
                onClick={openModal} //&& obtenerCodes  
               //onClick={handleEvent}                  
            >Agregar nuevo</button>
            <Modal 
                isOpen = {isOpenModal}
                closeModal= {closeModal}
                //codes = {codes}
            />
        </div>
    )
}

export default Agregarnuevo




