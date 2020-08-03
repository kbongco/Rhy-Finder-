import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table'
import axios from 'axios'

export default function Location() {
  const [arcades, updateArcades] = useState([])
  const [fetchLocations, updateFetchLocations] = useState(false)
  
  const testKey = 
  useEffect(() => {
    const arcadeSummon = async () => {
      const arcade = await axios("https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%201?maxRecords=3&view=Grid%20view",
        {
          headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
        })
      console.log(arcade)
      
    }
    arcadeSummon()
  }, [])
  return (
    <table>
    <thead>
      <tr>
          <th>Arcade Name</th>
          <th>City</th>
          <th>State</th>
          <th>Rhythm Games</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </table>
  )
}