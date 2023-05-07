import { useContext, createContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('Authentication context is not instantiated');
    return context;
};

export function AuthProvider ({children}) {

    const user = {
        login: true
    };

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}