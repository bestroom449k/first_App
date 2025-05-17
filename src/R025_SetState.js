import React, { Component } from 'react';

class R025_SetState extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: 'react',
    }
  } // 처음 으로는 porps로 보낸 값에 StateString변수애 'react'저장

  StateChange = (flag) => {
    if(flag == 'direct') this.state.StateString = '리액트';
    if(flag == 'setstate') this.setState({StateString : '리액트'});
  } // 만일 flag == 'direct'이면 불른 StateString = '리액트' 만일 flag == 'setstate' 바꾼 StateString : '리액트'

  render() {
    return (
    <div style={{padding: "0px"}}>
      <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button>
      <button onClick={(e) => this.StateChange('setstate', e)}>setState로 변경</button><br/>
      [state 변경하기] StateString : {this.state.StateString}
    </div>
    )
  }
} // 버튼 state 직접 변경클릿 시 StateChange 를 direct 이밴트 바꿈 뒷 코드도 같고 한칸 ㄸ뜀
// 그뒤는 장식 문구

export default R025_SetState;
