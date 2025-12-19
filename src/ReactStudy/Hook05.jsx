import React, { useState } from 'react'

function Hook05() {
    const inputValueEmpty = {
        name: "",
        age: "",
        address: ""

    }

    const [inputValue, setInputValue] = useState(inputValueEmpty)

    const OnChangeHandler = (e) => { 
        const { name, value } = e.target

        //함수형 업데이트
        //여기서 prev는 이 함수를 실행하는 시점의 가장 최신의 상태를 보장한다.
        setInputValue((prev) => {
            //이전 상태 객체를 그대로 복사해서 불변성을 지킴.
            return {
                ...prev,
                [name]: value
            }
        })
        
    //     const newInputValue = { 
    //     ...inputValue,
    //     [name]: value
    // }
    // setInputValue(newInputValue)
    }


  return (
    <div>
        <h1>이름: {inputValue.name}</h1>
        <h1>나이 : {inputValue.age}</h1>
        <h1>주소 : {inputValue.address}</h1>
        <input type="text" value={inputValue.name} name="name" onChange={OnChangeHandler} placeholder='이름'/>
        <input type="text" value={inputValue.age} name="age" onChange={OnChangeHandler} placeholder='나이'/>
        <input type="text" value={inputValue.address} name="address" onChange={OnChangeHandler} placeholder='주소'/>
        <button onClick={() => setInputValue(inputValueEmpty)}>리셋</button>
    </div>
  )
}

export default Hook05;
