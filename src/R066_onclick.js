import React, { Component } from 'react';

class R066_onclick extends Component {
  buttonClick = (param) => {
    if(typeof param != 'string') param = "Click a"
    console.log('param : '+ param);
  }

  render() {
    return (
      <>
        <button onClick={e => this.buttonClick("Click button")}>Click button</button>
        <div onClick={e => this.buttonClick("Click div")}>Click div</div>
        <a href="javascript:" onClick={this.buttonClick}>Click a</a>
      </>
    )//화살표 함수를 사용해서 this.buttonClick에 "Click button"이라는 문자열 인자를 전달.
    //콘솔에 param이 String이 맞아 "param : Click button"이 출력됨.
  }
}

export default R066_onclick;