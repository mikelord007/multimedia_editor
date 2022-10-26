import React,{useContext} from 'react'
import authContext from '../../context/authContextWrapper'


const HomePage = () => {
    const cntxt = useContext(authContext)

  return (
    <div>HomePage</div>
  )
}

export default HomePage