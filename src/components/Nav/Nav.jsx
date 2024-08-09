import { useState } from "react";
import { Modal } from "../Modal/Modal";
import './Nav.css'
export const Nav = ({ data, setStays }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => { setModal(!modal) };
    return (
        <nav>
            <img className='logo' src='/logo.png' alt="el logo de la pagina" />
            <div className="buttons">
                <button className='btn-location' onClick={toggleModal}>location</button>
                <button className='btn-guest' onClick={toggleModal}>guest</button>
                <button className='btn-search' onClick={toggleModal}>
                    <img className='icon-search' src='/search.svg' alt='icono de busqueda' />
                </button>
            </div>
            {modal && <Modal isOpen={modal} toggleModal={toggleModal} data={data} setStays={setStays} />}
        </nav>
    )
}
