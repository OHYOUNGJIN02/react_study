import React, { useState } from 'react'

function Hook04() {
    const [inputValue, setInputValue] = useState({
        v1: "",
        v2: "", 
        v3: ""
    })

  const OnChangeHandler = (e) => {
      const name = e.target.name
      const value = e.target.value

      const newInputValue = { 
        ...inputValue,
        [name]: value
    }

    setInputValue(newInputValue)
      
      console.log(name, value)
  }

  return (
    <div>
        <h1>{inputValue.v1}</h1>
        <h1>{inputValue.v2}</h1>
        <h1>{inputValue.v3}</h1>
        <input name="v1" type="text" onChange={OnChangeHandler}/>
        <input name="v2" type="text" onChange={OnChangeHandler}/>
        <input name="v3" type="text" onChange={OnChangeHandler}/>
        <button>확인</button>   
    </div>
    )
}


export default Hook04;