import {createContext, useEffect, useReducer} from "react";
import authReducer from "./authReducer";


const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const authContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    },[state.currentUser])

    return(
        <authContext.Provider value={{currentUser:state.currentUser, dispatch}}>
            {children}
        </authContext.Provider>
    )

};