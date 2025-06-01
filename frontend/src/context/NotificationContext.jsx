import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const NotificationContext = createContext();

export function NotificationProvider({children}) {

    const notifySuccess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);
    const notifyInfo = (msg) => toast.info(msg);

    return (
        <NotificationContext.Provider value={{notifySuccess, notifyError, notifyInfo}}>
            {children}
            <ToastContainer position="top-center" autoClose={3000} />
        </NotificationContext.Provider>
    );
}

export const useNotification = () => useContext(NotificationContext);
