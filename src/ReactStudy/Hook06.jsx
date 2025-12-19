import React, { useState } from 'react'

// 문제 

//input 하나를 만들고 입력 된 이름과 값이 일치하는 나이를 h2태그에 출력하시오
//만약 일치하는 이름이 없으면 값 없음 출력

//리액트는 일괄 처리
//상태 업데이트 요청이 들어오면 모아서 한 번에 처리한다.
//만약 SET함수가 즉시 실행이라면 작은 변화에도 컴포넌트를 다시 렌더링 하기 때문에 느려진다.
function Hook06() {
    const inputValueEmpty = {
        name: ""
    }

    const profiles = [
        {name : "오영진", age : 24},
        {name : "집1", age : 22},
        {name : "집2", age : 23},
        {name : "집3", age : 21},
    ]

    const [inputValue, setInputValue] = useState(inputValueEmpty)

    const [result, setResult] = useState("값 없음");
    const [getName, setGetName] = useState("");

  const OnChangeHandler = (e) => {
    const { name, value } = e.target;
    const found = profiles.find(p => p.name === value);

    setInputValue({ [name]: value });

    if(found) {
        setGetName(found.name);
    }else{
        setGetName("없는 이름 입니다.")
    }

    if (found) {
      setResult(found.age); 
    } else {
      setResult("값 없음"); 
    }
  };

    //선택적 연결(Optional Chaining)  ?.변수명
    //객체를 사용할 때, 속성이 undefinded 이거나 null일때면 에러가 발생시키는 대신 undefined를 반환한다.
    

    
        // const OnChangeHandler = (e) => { 
            
        //     const { name, value } = e.target


        //     setInputValue((prev) => {
            
        //         return {
        //             ...prev,
        //             [name]: value
        //         }
        //     })
        //}
    

return (
    <div>
      <input
        type="text" value={inputValue.name} name="name" onChange={OnChangeHandler} placeholder="이름"/>
      {}<h2>{result}</h2>
        <h2>{getName}</h2>
      <button onClick={() => setInputValue(inputValueEmpty)}>초기화</button>
    </div>
  );
}

export default Hook06

// <h2>{inputValue.name ? profiles.find(p => p.name === inputValue.name)?.age : "값 없다"}</h2>
