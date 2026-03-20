import React from 'react'

import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'
// useNavigate : 주소값을 바꿔주는 기능

const Join = () => {


    const inputRef = useRef()
    const inputPwRef = useRef()
    const inputNickRef = useRef()

    // 주소값을 바꾸는 변수(nav) 생성
    const nav = useNavigate()

    // 등록된 회원 ID :smhrd

    // 회원가입 ID가 smhrd가 아닐때만 로그인 페이지로 이동하고 싶어요
    const tryJoin = () => {
        // 사용자가 입력한 ID값 가져오기
        let inputId = inputRef.current.value
        let inputPw = inputPwRef.current.value
        let inputNick = inputNickRef.current.value
        nav(`/login?id=${inputId}&pw=${inputPw}&nick=${inputNick}`)
                
    }


    return (
        <div>

            <h1>회원가입 페이지 입니다</h1>

                ID : <input ref={inputRef}></input>
                <br></br>
                PW : <input ref={inputPwRef} type='password'></input>
                <br></br>
                NICK : <input ref={inputNickRef}></input>
                <br></br>
          
            <button onClick={tryJoin}>회원가입</button>
          
        </div>
  )
}

export default Join