import React,{useContext} from 'react'
import authContext from '../../context/authContextWrapper'
import GoogleIcon from '@mui/icons-material/Google';
import Soul from '../../assets/Logo/Soul.png'
import './index.scss'

const Auth = () => {
  const authctx = useContext(authContext)

  async function signInWithGoogle() {
      await authctx.state.supabase.auth.signIn({
          provider: 'google',
      })
  }


  return (
    <div className="auth">
      <img className='auth__companylogo' src={Soul} />
      <p className='auth__companyphrase'>Editing, made easy for you!</p>
      <button onClick={signInWithGoogle} className="auth__loginbtn"><GoogleIcon className="auth__loginbtn__icon"/><span className="auth__loginbtn__text">Sign In With Google</span></button>
    </div>
  )
}

export default Auth