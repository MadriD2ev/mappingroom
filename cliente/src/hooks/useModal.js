import React from 'react'

const useModal = () => {

    const [isOpenModal, setIsOpenModal] = React.useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }
    
    const closeModal = () => {
        setIsOpenModal(false);
    }

    return [isOpenModal, openModal, closeModal]
}

export default useModal
