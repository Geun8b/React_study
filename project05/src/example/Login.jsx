import React from 'react'
import {useRef} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'

const Login = () => {

    const idRef = useRef()
    const pwRef = useRef()
    const nav = useNavigate()
    const [query, setQuery] = useSearchParams()

    // ID : smhrd, PW : 123
    // 일때만 Home 페이지로 이동
    // 둘중 하나라도 다르면 alter('아이디 비밀번호 다시입력') 출력


    const tryLogin = () => {
        // 사용자가 입력한 ID값 가져오기
        let inputId = idRef.current.value
        let inputPw = pwRef.current.value

        let joinId = query.get('id')
        let joinPw = query.get('pw')

        if(inputId == joinId && inputPw == joinPw){
            nav('/?nick='+query.get('nick'))
        } else {
            alert('아이디 비밀번호 다시입력')
        }
      
    }

  return (
    <div>

        <h1>로그인 페이지 입니다</h1>

            ID : <input ref={idRef}></input>
            <br></br>
            PW : <input ref={pwRef} tpye='password'></input>
        
            <button onClick={tryLogin}>로그인</button>

    </div>
  )
}

export default Login