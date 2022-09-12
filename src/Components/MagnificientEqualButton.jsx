import React from 'react'
import "./Styles/MagnificientEqualButton.css"

function MagnificientEqualButton({handleEqual, screenState}) {
  return (
    <button disabled={screenState.operator === "=" ? "disabled" : ""}  onClick={handleEqual} className='EqualButton'>=</button>
  )
}

export default MagnificientEqualButton