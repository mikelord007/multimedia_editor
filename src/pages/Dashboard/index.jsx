import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabase.config'
import Navbar from '../../components/Navabar'
import Card from '../../components/Card'
import './index.scss'

const Dashboard = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    
    const getData = async () => {
      const { data, error } = await supabase.storage
        .from('multiimages')
        .download('avatar1.png')

      console.log('d', data)
      const urlll = URL.createObjectURL(data)
      setImages(urlll)

      // const {data: data2, _} = await supabase.storage
      //   .from('multiimages')
      //   .list('images')
      // console.log("data2",data2)
    }

    getData();

  }, [])
  
  return (
    <div className="dashboard">
      <Navbar/>
      <h1 className="dashboard__heading">
        Feed
      </h1>
      <div className="dashboard__cards" >
        <Card className="dashboard__cards__card" />
          <div className="dashboard__cards__sep"/>
        <Card className="dashboard__cards__card" />
          <div className="dashboard__cards__sep"/>
        <Card className="dashboard__cards__card" />
      </div>
    </div>
  )
}

export default Dashboard