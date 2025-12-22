import React, { useEffect, useState } from 'react'

const API_URL ="https://jsonplaceholder.typicode.com/users"

function Hook09() {
    const [userList, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);



    const fetchUser = async () => {
        try {
            setIsLoading(true)
            const responce = await fetch(API_URL)

            if(!responce.ok){
                throw new Error("데이터 불러오기 실패")
            }
            
            const responseData = await responce.json();
            setUser(responseData);
        }catch(error) {
            setError(error.message);

        }finally {
            setIsLoading(false)
        }
        
    }

    useEffect(() => {
        fetchUser();
    }, [])

    if(isLoading){
        return <div>불러오는 중....</div>
    }
    if(error)
        return <div>에러: {error}</div>


  return (
    <div>
        <div>
            {userList ? (
            userList.map((user) =>(
                <li>
                <div key={user.id}>
                    <p>이름:{user.name}</p>
                    <p>이메일:{user.email}</p>
                    <p>전화번호:{user.phone}</p>
                </div>
                </li>
            ))
            ) : null}
        </div>
    </div>
  )
}

export default Hook09