import React,{useContext} from 'react'
import authContext from '../../context/authContextWrapper'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const cntxt = useContext(authContext)
    const nav = useNavigate();

    nav('/dashboard')
  return (
    <div>HomePage</div>
  )
}

export default HomePage