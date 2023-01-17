import React from 'react'
import { withStorageListener } from './withStorageListener'
const Component = ({ show, toggleShow, sincronizeTodos }) => {
    if (!show) return null
    return (
        <div>
            <p>HUBO CAMBIOS</p>
            <button onClick={() => {
                toggleShow(false);
                sincronizeTodos();
            }}>click me</button>
        </div>
    )
}

const ChangeAlert = withStorageListener(Component);
export { ChangeAlert }