import { createContext, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ExceptionContext = createContext();

const intialErrorObj = {
    errCode: "",
    errMsg: ""
}

const ExceptionProvider = ({ children }) => {

    const [expObj, setExpObj] = useState(intialErrorObj);

    useEffect(() => {
        if (expObj.errCode)
            toast.error(`${expObj.errCode}:${expObj.errMsg}`)
    }, [expObj])

    return (
        <ExceptionContext.Provider value={{
            error: expObj.errCode,
            errorMsg: expObj.errMdg,
            showError: (code, msg) => setExpObj({
                errCode: code,
                errMsg: msg
            })
        }}>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={50000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </ExceptionContext.Provider>
    )
}

export default ExceptionProvider;