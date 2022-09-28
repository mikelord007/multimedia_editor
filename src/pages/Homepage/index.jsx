import React,{useContext} from 'react'
import authContext from '../../context/authContextWrapper'


const HomePage = () => {
    const cntxt = useContext(authContext)

    console.log(cntxt)
  return (
    <div>HomePage</div>
  )
}

export default HomePage