import React, { Component } from 'react';

class R069_onMouseOver extends Component {
  MouseOver(tag) {
    console.log('TAG : '+tag);
  } //마우스가 영역에 진입 할때 이벤트 발생 MouseOver 사용
    //tag라는 인자를 받아서 콘솔에 "TAG : <tag>"으로 출력. *인자는 실제 넘겨주는 값*

  render() {
    return (
      <>
        <div onMouseOver={e => this.MouseOver("div")}>
          <h3>DIV onMouseOver</h3>
        </div>

        <input type="text" onMouseOver={e => this.MouseOver("input")}/>

        <select onMouseOver={e => this.MouseOver("select")}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>
      </>
    )//chaper 68과 같지다 차이점은  onMouseMove것 말고 onMouseOver사용 한점
    //onMouseMove랑 onMouseOver의 차이점은 onMouseOver는 마우스가 영역 위에 올라갔을 때만 발생
    //onMouseMove는 마우스가 영역 위에서 움직일 때마다 발생.
  }
}

export default R069_onMouseOver;