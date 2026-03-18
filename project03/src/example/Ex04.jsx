import React, { useState } from 'react'
import Ex04Box from '../components/Ex04Box'

const Ex04 = () => {

  // 1. 주사위 상태
  const [myDice, setMyDice] = useState(1)
  const [comDice, setComDice] = useState(1)

  // 2. 점수 상태
  const [myScore, setMyScore] = useState(0)
  const [comScore, setComScore] = useState(0)

  // 3. 던지기 함수
  const throwDice = () => {
    const my = Math.floor(Math.random() * 6) + 1
    const com = Math.floor(Math.random() * 6) + 1

    setMyDice(my)
    setComDice(com)

    // 점수 증가 로직
    if (my > com) {
      setMyScore(prev => prev + 1)
    } else if (my < com) {
      setComScore(prev => prev + 1)
    }
  }

  // 4. 초기화
  const resetDice = () => {
    setMyDice(1)
    setComDice(1)
    setMyScore(0)
    setComScore(0)
  }

  // 5. 결과 메시지
  const getResult = () => {
    if (myScore >= 10) return "User Win"
    if (comScore >= 10) return "Com Win"

    if (myDice > comDice) return "이겼어"
    if (myDice < comDice) return "졌어"
    return "쌤쌤"
  }

  return (
    <div>
      <h1>주사위 게임</h1>

      {/* 버튼 */}
      <button 
        onClick={throwDice}
        disabled={myScore >= 10 || comScore >= 10}
      >
        던지기
      </button>

      <button onClick={resetDice}>초기화</button>

      <hr />

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        
        {/* 유저 */}
        <div style={{ textAlign: 'center' }}>
          <Ex04Box player='나' dice={myDice} />
          <h2>{myScore}</h2>
        </div>

        {/* 컴퓨터 */}
        <div style={{ textAlign: 'center' }}>
          <Ex04Box player='컴퓨터' dice={comDice} />
          <h2>{comScore}</h2>
        </div>

      </div>

      <h2>{getResult()}</h2>

    </div>
  )
}

export default Ex04