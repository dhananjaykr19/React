import React, { useEffect, useState } from 'react'

const useShowStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    // check if online
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }, []);

    return onlineStatus;
}

export default useShowStatus;