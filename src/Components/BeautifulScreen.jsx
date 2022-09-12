import React from 'react'
import "./Styles/BeautifulScreen.css"

function BeautifulScreen({ screenState }) {
    console.log(screenState)
  return (
    <div className='BeautifulScreen'><span>{screenState.display}</span><span>{screenState.results}</span></div>
  )
}

export default BeautifulScreen