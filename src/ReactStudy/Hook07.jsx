import React, { useEffect, useState } from 'react'

function Hook07() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [h1Name, setH1Name] = useState("");
    const [h1Age, setH1Age] = useState("");

    const nameOnChangeHandler = (e) => {
        setName(e.target.value);
    }
    
    const AgeOnChnageHandler = (e) => {
        setAge(e.target.value);
    }

    const nameOnClickHandler =  () => {
        setH1Name(name);
    } 
    const ageOnClickHandler = () => {
        setH1Age(age);
    }

    //useEffect => 렌더링 이후 실행되는 사이드 이펙트(부수효과)를 다루기 위한 훅
    

    useEffect(() => {
        //렌더링 이후 실행할 작업
        console.log("마운트됨", name, age)
        return () => {
            //clean up 함수 : 컴포넌트가 언마운트 될때 실행할 작업
            console.log("언마운트됨", name, age)}
    }, [name, age])
    //의존성 배열 => 상태에 의존하게 해 상태값이 바뀔때마다 이펙트 발생

   
  return (
    <div>
        <h1>이름 : {h1Name}</h1>
        <h1>나이 : {h1Age}</h1>
        <input type="text" onChange={nameOnChangeHandler}/>
        <button onClick={nameOnClickHandler}>이름 확인</button>
        <input type="text" onChange={AgeOnChnageHandler}/>
        <button onClick={ageOnClickHandler}>나이 확인</button>
    </div>
  )
}

export default Hook07


