import React, { useState } from 'react'

const useStorageListener = () => {

    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener("storage", (evt) => {
        if (evt.key === 'TODOS_V1') {
            setStorageChange(true);
        }
    });

    return ({
        show: storageChange,
        toggleShow: setStorageChange,
    })

}

export { useStorageListener }
