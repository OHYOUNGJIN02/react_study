import React from 'react'

export default function React02() {
    const student = {
        name: "오영진",
        age : 24,
        hobby : ["겨울잠", "책 읽기", "축구"],
    };
  return (
    <div>
        <div>이름:{student.name}</div>
        <div>나이:{student.age}({student.age > 19 ? "성인" : "미성년자"})</div>
    <div>
        <p>취미
            <ul>
                {student.hobby.map((hobbyName) => (
                    <li>{hobbyName}</li>
                ))} 
            </ul>
        </p>
    </div>
    </div>
  )
}
