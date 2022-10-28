// import React,{useContext,useEffect, useState} from 'react'
import React,{useReducer} from 'react'
import supabase from "../config/supabase.config";

const authContext = React.createContext();

const initialState = {user: supabase.auth.currentUser, session: supabase.auth.currentSession, error: null, supabase: supabase};

function reducer(state, action) {
  if (action.type === 'clear')
    return action.payload;
  else {
    
    if(JSON.stringify(action.payload) !== JSON.stringify(state.type))
      return {...state, [action.type]: action.payload};
  }
}

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <authContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </authContext.Provider>
  );
};

export default authContext;