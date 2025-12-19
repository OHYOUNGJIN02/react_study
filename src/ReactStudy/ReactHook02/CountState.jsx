import React, {useState} from 'react'

function CountState() {
    const [count, setCount] = useState(0);
    console.log("CountState 렌더링됨")
    
     const plusOnclickHandler = () => {
        setCount(count + 1)
     }
    
     const minusOnclickHandler = () => {
        setCount(count - 1)
     }
  return (
    <div>
        <Count count={count}/>
        <CountButton onClickHandler={plusOnclickHandler} text={"+1"} />
        <CountButton onClickHandler={minusOnclickHandler} text={"-1"} />
    </div>
  )
}

export default CountState