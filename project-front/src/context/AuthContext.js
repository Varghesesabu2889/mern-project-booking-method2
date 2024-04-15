import {createContext,useReducer, useEffect} from 'react';

const initial_state = {
    user: null,
    loading: false,
    error: null
};

const userData = localStorage.getItem('user');

if (userData !== null) {
    try {
        initial_state.user = JSON.parse(userData);
    } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        // Handle parsing error, e.g., set user to null or handle differently
        initial_state.user = null;
    }
}


export const AuthContext = createContext(initial_state)

const AuthReducer = (state,action)=>{
    switch(action.type){
       case"LOGIN_START":
       return {
        user:null,
        loading:true,
        error:null
 }
 case 'LOGIN_SUCCESS': 
 return{
    user:action.payload,
    loading:false,
        error:null

 }
 case 'LOGIN_FAILURE': 
 return{
    user:null,
    loading:false,
        error:action.payload
    }
    case 'REGISTER_SUCCESS': 
    return{
       user:null,
       loading:false,
           error:null
       }
       case 'LOGOUT': 
    return{
       user:null,
       loading:false,
           error:null,
           tokenExpiration:null
       }

       default :
       return state

    }
}



export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer,initial_state)

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user)) 
    },[state.user])

    return <AuthContext.Provider value={{
        user:state.user,
        loading:state.loading,
        error:state.error,
        dispatch,
}}>
        {children}
    </AuthContext.Provider>
}