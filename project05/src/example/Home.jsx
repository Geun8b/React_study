import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'


const Home = () => {
    const [query, setQuery] = useSearchParams()
  return (
    <div>

        <h1>HOME 페이지 입니다</h1>
        <h2>{query.get('nick')}</h2>
        <ul>
            <li>
                {/* 동기 통신 */}
                <Link to = '/login'>로그인 이동</Link>
            </li>
            <li>
                {/* 비동기 통신 */}
                <Link to = '/join'>회원가입 이동</Link>
            </li>
        </ul>

    </div>
  )
}

export default Home