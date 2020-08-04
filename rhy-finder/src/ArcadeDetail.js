import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arcades from './App.js'


//2nd Airtable names for columns --> RhythmGameName, Images,Locations
export default function ArcadeDetai() {
  const params = useParams()

  const arcade = arcades.find(a => a.name === params.name)

  return (
    <div>
      <h1>{arcade.fields.ArcadeName}</h1>
    </div> 
  )
}