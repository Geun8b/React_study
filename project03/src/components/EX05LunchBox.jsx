import React from 'react'


const EX05LunchBox = ({lunch}) => {
  return (
    <div style={{border : '2px solid gray', padding : '3%', borderRadius : '10px'}}>
        <p>
            <input type='checkbox'></input>
            {lunch}
        </p>
    </div>
  )
}

export default EX05LunchBox