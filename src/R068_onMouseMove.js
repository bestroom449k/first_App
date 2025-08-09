import React, { Component } from 'react';

class R068_onMouseMove extends Component {
  MouseMove(tag) {
    console.log('TAG : '+tag);
  }/*MouseMove는 마우스가 움직일 때 쓰이는 함수
  tag라는 인자를 받아서 콘솔에 "TAG : <tag>"으로  출력.
  tag 값은 div, input, select 중 하나. */

  render() {
    return (
      <>
        <div onMouseMove={e => this.MouseMove("div")}>
          <h3>DIV onMouseMove</h3>
        </div>
        
        <input type="text" onMouseMove={e => this.MouseMove("input")}/>

        <select onMouseMove={e => this.MouseMove("select")}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>
      </>
    )//onMouseMove 이벤트가 발생할 때마다 MouseMove 함수가 호출되고, 해당 태그 이름이 콘솔에 출력됩니다.
    //div위에 있으면 div가 출력 select 위에 있으면 select가 출력 input 위에 있으면 input이 출력
  }
}

export default R068_onMouseMove;