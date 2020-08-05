import React, { useState, useEffect, useRef } from 'react'

export default function Search() {
  const [searchQuery, updateSearchQuery] = useState('')
  const [arcades, updateArcades] = useState([])
  const focusSearch = useRef(null)

  useEffect(() => { focusSearch.current.focus() }, [])
  
  const getResults = async () => {
    
  }
}