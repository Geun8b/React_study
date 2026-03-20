import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// Ex01. axios 개요 실습1
// import App from './example/Ex01.jsx'

// Ex02. axios 개요 실습2
 import Ex02 from './example/Ex02.jsx'

// Router 개요
import Home from './example/Home.jsx'
import About from './example/About.jsx'

// Router : 주소값에 따라서 다른 페이지를 출력하는 기능
import {Route, Routes, BrowserRouter} from 'react-router-dom'
// Route : 컴포넌트와 주소값을 대응하는 기능
// Routes : 주소값 관리
// BrowserRouter :  Router 기능을 사용 할 수 있게끔 권한을 받아온다 
//                 (전체 라우터 관리자)


createRoot(document.getElementById('root')).render(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                {/* /ex02 라는 주소로 Ex02컴포넌트가 출력되게 만들어주세요 */}
                <Route path='/ex02' element={<Ex02></Ex02>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
)
