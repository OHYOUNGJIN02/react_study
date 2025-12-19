import React from 'react'

function CountButton({onClickHandler, text}) {
    console.log("CountButton렌더링됨")
  return (
    <button onClick={onClickHandler}>{text}</button>
  )
}

export default CountButton