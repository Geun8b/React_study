import React, { Component } from 'react'

export default class Ex08 extends Component {

    state={
        num : 0
    }

    // LifeCycle : 컴포넌트의 생명 주기
    // Mount : 맨처음 => componentDidMount()
    // Update : 화면이 바뀌었을때 => componentDidUpdate()
    // UnMount : 화면이 사라졌을때 => componentWillUnMount()

    componentDidMount(){
        console.log('Mount')
    }
    componentDidUpdate(){
        console.log('Update')

        if(this.state.num == 10){

        }
    }

  render() {
    return (
      <div>

        <h1>{this.state.num}</h1>

        <button onClick={()=>{this.setState({num:this.state.num+1})}}>PLUS</button>

      </div>
    )
  }
}

// Ex07로 다시 ㄱㄱ