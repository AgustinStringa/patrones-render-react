import React from 'react'
import { withStorageListener } from './withStorageListener'
import './ChangeAlert.css'
const Component = ({ show, toggleShow, sincronizeTodos }) => {
    if (!show) return null
    return (
        <div className='changeContainer'>
            <div className='alert-content'>
                <p>HUBO CAMBIOS</p>
                <button onClick={() => {
                    toggleShow(false);
                    sincronizeTodos();
                }}>Actualizar TODOS</button>
            </div>
        </div>
    )
}

const ChangeAlert = withStorageListener(Component);
export { ChangeAlert }