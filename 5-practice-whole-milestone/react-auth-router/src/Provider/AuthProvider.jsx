import React, { createContext, useState } from 'react';
import app from '../firebase.init';
import { getAuth } from "firebase/auth";
import { AuthContext } from '../Context/AuthContext';

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    const data = {
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;