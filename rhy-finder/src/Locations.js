import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table'
import axios from 'axios'

export default function Location() {
  const [arcades, updateArcades] = useState([])
  const [fetchLocations, updateFetchLocations] = useState(false)
  
  useEffect(() => {
    const arcadeSummon = async () => {
      const arcade = await axios.get("https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%201/recBnXQ2kfjxevOmo",
        {
          headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE}`
        }
        })
      console.log(arcade)
      
    }
    arcadeSummon()
  }, [])
  return (
    null
  )
}