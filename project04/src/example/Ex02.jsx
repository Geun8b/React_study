import React,{useState, useEffect, useRef} from 'react'
import axios from 'axios'
// useRef : 태그 참조 변수를 만들 수 있는 기능

const Ex02 = () => {

    const [movieData, setMovieData] = useState([])
    const [inputDay, setInputDay] = useState('')

    const inputRef = useRef()

    // 페이지 열리자마자 실행
    useEffect(() => {
        getData('20120101')
    }, [])

    const getData = (movieDay) => {
        axios({
            url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=6f642e86c065808b862d2555bb054e7a&targetDt='+movieDay,
            method: 'get',
        })
        .then((res) => {
            console.log('통신성공')

            const list = res.data.boxOfficeResult.dailyBoxOfficeList
            setMovieData(list)
        })
        .catch((err) => {
            console.log(err)
        })
    }

        const searchDay = () =>{
            // input태그에 적은 날짜 가져오기
            // inputRef.current : inputRef변수가 가르키고 있는 태그를 가져오겠다
            // inputRef.current.value
            // inputDay
            getData(inputRef.current.value)
            
            // document.querySelector('input').value
        }

    return (
        <div>

            <h1>axios 영화데이터 실습2</h1>
            
            <div style={{display:'flex', justifyContent:'center'}}>
                <table border={1}>
                    <tbody>
                        <tr bgcolor='pink'>
                            <th>영화순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                        </tr>

                        {movieData.map((movie) => (
                            <tr key={movie.rnum}>
                                <td>{movie.rank}</td>
                                <td>{movie.movieNm}</td>
                                <td>{movie.openDt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 값이 바뀔때마다 setInputDay 실행
                e.target : 이벤트를 발생시킨 주체(input 태그)
                e.target.value : input태그에 적힌 값을 의미
            */}
            {/* 
                ref={inputRef}
                 => inputRef 라는 변수와 input태그를 연결해줬다
            */}
            <input ref={inputRef} onChange={(e)=>setInputDay(e.target.value)}></input>
            <button onClick={searchDay}>검색</button>

        </div>
    )
}

// 순위: rank 제목: movieNm 개봉일 : openDt

export default Ex02