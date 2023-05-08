import { useState, useContext, createContext, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('Authentication context is not instantiated');
    return context;
};

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    const login = ( email, password ) => {
        signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        signOut( auth );
    };

    useEffect(() => {
        onAuthStateChanged( auth, (currentUser) => {
            console.log('currentUser', currentUser);
            setUser(currentUser);
        });
    }, []);

    return (
        <AuthContext.Provider value={{login, logout, user}}>
            {children}
        </AuthContext.Provider>
    );
}