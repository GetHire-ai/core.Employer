import { useEffect, useRef } from "react";
import io from "socket.io-client";

const url = process.env.REACT_APP_BACKEND_URL;

const useSocket = (companyId) => {
    const socketRef = useRef();

    if (!socketRef.current) {
        socketRef.current = io(url, { withCredentials: true });
    }

    useEffect(() => {
        const socket = socketRef.current;

        socket.emit("userConnected", companyId);

        return () => {
            socket.emit("userDisconnected", companyId);
            socket.disconnect();
        };
    }, [companyId]);

    return socketRef.current;
};

export default useSocket;
