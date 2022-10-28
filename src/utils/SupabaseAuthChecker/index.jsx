import React,{useContext,useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import authContext from '../../context/authContextWrapper'
import supabase from '../../config/supabase.config';

const SupabaseAuthChecker = ({children}) => {
    const ctx = useContext(authContext)
    const nav = useNavigate();

    const [initializing, setinitializing] = useState(true)
    
    useEffect(()=> {

        ( async () => {
            const {data: {user}} = await ctx.state.supabase.auth.getUser();

            const { session , _ } = await ctx.state.supabase.auth.getSession();
            ctx.dispatch({type: 'clear', payload: {supabase: ctx.state.supabase, user: user, session: session}})
            // console.log("h2", {supabase: ctx.state.supabase, user: user, session: session})
            setinitializing(false)

        })()


        supabase.auth.onAuthStateChange( async (event, session) => {

            
            const prev = await ctx.state.user.aud;

            const {data: {user}} = await supabase.auth.getUser();

            const payload = {supabase: supabase, user: user, session: session}
            
            ctx.dispatch({type: 'clear', payload})

            if(user?.aud !== prev){
                nav('/dashboard')
            }

        });

    },[])

  return (
      <>
      {
        initializing ?
            'Loadding...'
            :
            children
      }
      </>
  )
}

export default SupabaseAuthChecker