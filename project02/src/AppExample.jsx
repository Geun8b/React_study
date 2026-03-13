import './App.css'

// 컴포넌트 불러오기
// import 별칭 from '경로'
import MemberBox from './components/MemberBox'

function AppExample(){

/* 컴포넌트 (Component)
 - 리액트로 만들어진 앱의 최소 단위
 - 반복되는 코드를 하나로 묶어서 우리는 컴포넌트로 만든다
 - 내가 원하는 코드를 묶어서 '태그화'
 - ★ 반드시 대문자로 시작 => 기존의 HTML 태그와 구분하기 위함
*/

  let TeamName = "동환일보"

  
  return(
    <>

      <MemberBox TeamName = {TeamName} name="한동환" BloodType='B'></MemberBox>
      <MemberBox TeamName = {TeamName} name="문병근" BloodType='B'></MemberBox>
      <MemberBox TeamName = {TeamName} name="임주은" BloodType='B'></MemberBox>
      <MemberBox TeamName = {TeamName} name="김은혜" BloodType='AB'></MemberBox>

    </>
  )
}

export default AppExample
