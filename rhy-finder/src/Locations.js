import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table'
import axios from 'axios'

//ArcadeName, City, State
export default function Locations() {
  const [arcades, updateArcades] = useState({})
  
  

  useEffect(() => {
    const arcadeSummon = async () => {
      const arcade = await axios("https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%201?maxRecords=3&view=Grid%20view",
        {
          headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
        })
      console.log(arcade.data.records[0].fields.City)
      
    }
    arcadeSummon()
  }, [])
  
  return (
    <div>
      {/* <h1>Locations and Such </h1>
      {arcades.map(arcadeinfo => <div>
        <h2>{arcadeinfo.data.records.field.ArcadeName}</h2>)
        <h3>{arcadeinfo.data.records.field.City}</h3>
        <p>{arcadeinfo.data.records.field.State}</p>
        </div>)} */}
      




    {/* <table>
    <thead>
      <tr>
          <th>Arcade Name</th>
          <th>City</th>
          <th>State</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>asdasdds</td>
      </tr>
      <tr>
        <td>asdasdds</td>
      </tr>
    </tbody>
      </table> */}
      </div>
  )
}