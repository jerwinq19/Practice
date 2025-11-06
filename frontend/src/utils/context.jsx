import { useContext, createContext,  } from "react";

const AuthContext = createContext()

export function ContextProvider({ children }) {    return (
        <AuthContext value={{toast, setThreads, setNext, setPrev, FetchAllThread}}>
            {children}
        </AuthContext>
    )

}

export function useAuthContext() {
    return useContext(AuthContext)
}