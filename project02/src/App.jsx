import './App.css'

// 컴포넌트 불러오기
// import 별칭 from '경로'
import MenuBox from './components/MenuBox'

function App(){

/* 컴포넌트 (Component)
 - 리액트로 만들어진 앱의 최소 단위
 - 반복되는 코드를 하나로 묶어서 우리는 컴포넌트로 만든다
 - 내가 원하는 코드를 묶어서 '태그화'
 - ★ 반드시 대문자로 시작 => 기존의 HTML 태그와 구분하기 위함
*/

  let iced = "아이스"
  let hot = "따뜻한"
  
  return(
    <>

      <MenuBox name = "아메리카노" temp={iced} price='3500'></MenuBox>
      <MenuBox name = "아인슈페너" temp={iced} price='4500'></MenuBox>
      <MenuBox name = "고구마 라떼" temp={hot} price='4800'></MenuBox>

    </>
  )
}

export default App
