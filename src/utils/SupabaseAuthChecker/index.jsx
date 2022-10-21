import React,{useContext} from 'react'
import authContext from '../../context/authContextWrapper'

const SupabaseAuthChecker = ({children}) => {
    const ctx = useContext(authContext)

    ctx.state.supabase.auth.onAuthStateChange((event, session) => {
        const user = ctx.state.supabase.auth.user();
        ctx.dispatch({type: 'clear', payload: {supabase: ctx.state.supabase, user: user, session: session}})
      });

  return (
      <>
       {children}
      </>
  )
}

export default SupabaseAuthChecker