import React from 'react'
import Ex05LunchBox from '../components/EX05LunchBox'

const Ex05Lunch = () => {

    let menuList = ['로제엽떡 분모자로변경', '튤립닭발에 주먹밥', '치즈오븐스파게티', '봄동비빔밥']
    let renderLunch = menuList.map(food => <Ex05LunchBox key={food} lunch={food}></Ex05LunchBox>)


  return (
    <div>
        <h3>오늘의 점심 메뉴</h3>
        {renderLunch}

    </div>
  )
}

export default Ex05Lunch