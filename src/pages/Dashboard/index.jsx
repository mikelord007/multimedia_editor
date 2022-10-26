import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabase.config'
import Navbar from '../../components/Navabar'

const Dashboard = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    
    const getData = async () => {
      const { data, error } = await supabase.storage
        .from('multiimages')
        .download('cool_bg.jpg')
      const urlll = URL.createObjectURL(data)
      setImages(urlll)

      const {data: data2, _} = await supabase.storage
        .from('multiimages')
        .list('m1')
      console.log("data2",data2)
    }


  
    getData();

  }, [])
  
  return (
    <div className="dashboard">
      <Navbar/>
      <div>hello world</div>
      <img src={images} />
    </div>
  )
}

export default Dashboard