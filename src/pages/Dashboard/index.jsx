import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabase.config'
import Navbar from '../../components/Navabar'
import Card from '../../components/Card'
import './index.scss'

const Dashboard = () => {

  const [coredata, setCoreData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    
    const getData = async () => {

      const { data, error } = await supabase
      .from('imgData')
      .select()

      setCoreData(data)

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
        {coredata.map(data => {
          return (
            <>
              <Card key={data.id} className="dashboard__cards__card" data={data}/>
              <div className='dashboard__cards__sep' />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard