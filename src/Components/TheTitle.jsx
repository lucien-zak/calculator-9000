import React from 'react'
import "./Styles/TheTitle.css"

function TheTitle({screenState}) {
  return (
    <h1>{screenState.total < 9000 ? "Calculator9000" : "IT'S OVER 9000 !!!!!!!"}</h1>
  )
}

export default TheTitle