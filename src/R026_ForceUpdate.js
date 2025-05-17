import React, { Component } from 'react';

class R026_ForceUpdate extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: 'react',
    }
  } //생성

  StateChange = () => {
    this.state.StateString = '리액트';
    this.forceUpdate();
  }
  //  StateChange변수 선언 및 값 입력 한후 이것은 forceUpdate라 함
  render() {
    return (
    <div style={{padding: "0px"}}>
      <button onClick={(e) => this.StateChange(e)}>state 직접 변경</button><br/>
      [state 변경하기] StateString : {this.state.StateString}
    </div>
    )
  }
} // 그리고 버튼 눌를 때 이밴트 발생 후 변경 값 출력

export default R026_ForceUpdate;
