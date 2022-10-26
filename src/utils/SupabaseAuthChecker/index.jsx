import React,{useContext,useEffect, useState} from 'react'
import authContext from '../../context/authContextWrapper'

const SupabaseAuthChecker = ({children}) => {
    const ctx = useContext(authContext)

    const [initializing, setinitializing] = useState(true)
    
    useEffect(()=> {

        ( async () => {
            const {data: {user}} = await ctx.state.supabase.auth.getUser();
            const { session , _ } = await ctx.state.supabase.auth.getSession();

            ctx.dispatch({type: 'clear', payload: {supabase: ctx.state.supabase, user: user, session: session}})
            setinitializing(false)

        })()


        ctx.state.supabase.auth.onAuthStateChange( async (_, session) => {

            const {data: {user}} = await ctx.state.supabase.auth.getUser();

            ctx.dispatch({type: 'clear', payload: {supabase: ctx.state.supabase, user: user, session: session}})

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