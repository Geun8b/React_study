import React,{useState} from 'react'
import axios from 'axios'
// axios : 비동기 통신 라이브러리

const Ex01 = () => {

    const[movieData, setMovieData] = useState([])

    const getData = ()=>{
        axios({
            // 어디랑 통신할껀지?
            url : 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=6f642e86c065808b862d2555bb054e7a&targetDt=20120101',
            // 어떤 방법으로 통신할껀지?
            method : 'get',   
            // data : {   // 어떤 데이터를 보낼껀지?

            // }
        })
        // 통신 성공시 실행시킬 로직
        .then((res)=>{
            console.log('통신성공')
            console.log(res)
            console.log(res.data.boxOfficeResult.boxofficeType)
            console.log(res.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm)

            const list = res.data.boxOfficeResult.dailyBoxOfficeList

            setMovieData(list)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  

  return (
    <div>
    
        <h1>axios 영화데이터</h1>

        <button onClick={getData}>데이터 가져오기</button>

        <table border={1}>
            <tbody>
                <tr bgcolor = 'yellow'>
                    <th>영화순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                </tr>

            {/* 반복되는 내용을 map함수로 렌더링 */}
                {movieData.map(movie => 
                    <tr key={movie.rnum}>
                        <td>{movie.rank}</td>
                        <td>{movie.movieNm}</td>
                        <td>{movie.openDt}</td>
                    </tr>
                )}
            </tbody>

        </table>
    
    </div>
  )
}
// 순위: rank 제목: movieNm 개봉일 : openDt
export default Ex01