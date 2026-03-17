import React from 'react'

const Ex04Box = ({player, dice}) => {
  return (
    <div>

        <h3>{player}</h3>
        <img src={'/img/dice' + dice + '.png'}></img>
        {/* <img src={`/img/dice${dice}.png`}></img> */}
        {/* print(f'{}') */}
        
    </div>
  )
}

export default Ex04Box