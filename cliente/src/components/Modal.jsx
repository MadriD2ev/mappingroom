import React from 'react'
import '../index.css'

const Modal = ({isOpen, closeModal}) => {

    const [codes, setCodes] = React.useState([])
    
    React.useEffect(() => {
        obtenerCodes()
    },[])

    const obtenerCodes = async() =>{
        const data = await fetch("http://localhost:3001/rooms/code")
        const cod = await data.json()
        setCodes(cod)
    }

    //primero se ejecuta el click del elemento interno y luego la de los padres
    const modalDialogClick = (e) => {
        e.stopPropagation(); //detiene el evento del elemento padre  
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal_dialog" onClick={modalDialogClick}>
                <div className="alert alert-dark font-weight-bold" role="alert">Codes:</div>
                <label className='font-weight-bold'>Code Name</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        {
                            codes.map(item => (
                                <option value ={item.id} key={item.id}>{item.id} - {item.code}</option>
                            ))

                        }
                    </select>
                <hr/>
                <div className="p-1">
                    <button>
                        Guardar
                    </button>
                    <button className='mx-5' onClick={closeModal}>
                        Cancelar
                    </button>
                </div> 
            </div>           
        </div>
    )
}

export default Modal
