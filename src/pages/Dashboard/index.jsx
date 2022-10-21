import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabase.config'
import Navbar from '../../components/Navabar'

const Dashboard = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    
    const getData = async () => {
      
      const { data, error } = await supabase
        .storage
        .from('post-images')
        .list('test')
  
      console.log("datalist: ", data, error)

      const { data2, error2 } = await supabase
        .storage
        .from('public')
        .download('post-images/test/cool_bg.jpg')

      console.log("d:",data2, error2)
      setImages([...images, data2])
    }
  
    getData();

  }, [])
  
  return (
    <div className="dashboard">
      <Navbar/>
      <div>Fuck my arse</div>
    </div>
  )
}

export default Dashboard