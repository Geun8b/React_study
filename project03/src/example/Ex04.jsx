import React,{useState} from 'react'
import Ex04Box from '../components/Ex04Box'
const Ex04 = () => {

    // 주사위 게임을 해보자
    // 1. 유저가 '던지기' 버튼을 누르면 throwDice 함수 실행
    //   1-1) 두개의 주사위 눈이 랜덤으로 표시 (myDice, comDice)
    //   1-2) 두개의 주사위 눈을 Ex04Box 로 전달

    // 2. Ex04Box로 가서 주사위 눈을 전달 받고 내용을 수정 (props)
    // 3. 아래에 결과를 출력해보자
    //  내가 더 크면 승리, 내가 더 작으면 패배, 같으면 동점
    //  ※ 이 때, 내가 원하는 결과가 정확하게 나오지 않아도 괜찮습니다
    // 4. 유저가 초기화 버튼을 누르면 다시 주사위는 1-1 로 돌아간다.(resetDice)

    const [myDice, setMyDice] = useState(0)
    const [comDice, setComDice] = useState(0)

    const throwDice = (e)=>{
        console.log('던지기')
        console.log('랜덤 주사위', parseInt(Math.random()*6)+1)
        console.log('내가 던진 주사위는?', e.target.innerText)

        setComDice(parseInt(Math.random()*6)+1)
        setMyDice(parseInt(Math.random()*6)+1)
    }


  return (
    <div>

        <h1>주사위게임</h1>
        <button onClick={throwDice}>던지기</button>
        <button>초기화</button>

        
        <hr></hr>
        


        <h3></h3>

        <div style={{display : 'flex'}}>
            
            <Ex04Box player ='나'></Ex04Box>    
            <Ex04Box player ='컴퓨터'></Ex04Box>    
        
        </div>

        <h2>결과</h2>
        
        <p>내가 던진 주사위 : {myDice}</p>
        <p>컴퓨터가 던진 주사위 : {comDice}</p>        

    
    </div>
  )
}

export default Ex04