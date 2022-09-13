import React from 'react'
import "./Styles/BeautifulScreen.css"

function BeautifulScreen({ screenState }) {
    console.log(screenState)
  return (
    <div className='BeautifulScreen'><span>{screenState.results}</span><span>{screenState.display}</span></div>
  )
}

export default BeautifulScreen