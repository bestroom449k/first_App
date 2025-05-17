import React, { Component } from 'react';

class R024_ReactState extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: this.props.reactString,
        StateNumber: 200,  
    }
  } //이 클래스에서 state를 받고 StateString라는 변수에 APP.js에서 만든 propsf reactString 넣고 StateNumber는 200 선언

  render() {
    return (
    <div style={{padding: "0px"}}>
      {this.state.StateString}{this.state.StateNumber}
    </div>
    )
  }
} // props로 담은 것을 state 로 불름

export default R024_ReactState;