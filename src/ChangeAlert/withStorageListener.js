import React, { useState } from 'react'

const withStorageListener = (WrappedComponent) => {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false);
        window.addEventListener("storage", (evt) => {
            if (evt.key === 'TODOS_V1') {
                setStorageChange(true);
            }
        });

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={setStorageChange}
                {...props}
            />)

    }
}

export { withStorageListener }
