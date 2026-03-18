import React from 'react'
import {useState, useEffect} from 'react'
// useEffect: 함수형 컴포넌트에서 라이프사이클 함수 
// => (componentDidMount, componentDidUpdate)를 사용 할 수 있는 기능
// => componentDidMount + componentDidUpdate 를 합쳐 놓은 형태
// EX08.jsx 에서 컨트롤?

const Ex07 = () => {

    // setState 함수는 close 함수
    // => 제일 마지막에 실행 (setNum이 제일 마지막에 실행됨)
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    useEffect(()=>{
        console.log('effect')
        if(num == 10){
            alert('목표달성')
        }
    // 여기 배열에 들어간 변수가 있을때는 그 변수가 바뀔때만 useEffect를 사용하겠다는 뜻
    // 배열에 여러값이 들어가면 거기 들어간 여러 값들이 각각 다 바뀌면 useEffect를 사용하겠다는 뜻
    // 배열에 하나도 없을때는 처음 화면이 렌더링(화면출력) 하는 시점에서만 useEffect를 사용하겠다는 뜻
    }, [num])

    const addNum = () =>{
        // 출력하는 num의 값이 10에 도달하면
        // 알림창 '목표숫자도달!' 알림창 출력
        let number = num+1
        setNum(num+1)
    }
    /* 방법1 
        setNum(num+1)
        if (number == 9){
        alert('목표달성')
        }
    */

  return (
    <div>

        <h1>{num}</h1>
        <h1>{num2}</h1>

        <button onClick={addNum}>PLUS</button>
        <button onClick={()=>setNum2(num2+2)}>PLUS2</button>

    </div>
  )
}

export default Ex07