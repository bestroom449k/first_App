import React, { Component } from 'react';

class R069_onMouseOver extends Component {
  MouseOut(tag) {
    console.log('TAG : '+tag);
  } 

  render() {
    return (
      <>
        <div onMouseOut={e => this.MouseOut("div")}>
          <h3>DIV onMouseOver</h3>
        </div>

        <input type="text" onMouseOut={e => this.MouseOut("input")}/>

        <select onMouseOut={e => this.MouseOut("select")}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>
      </>
    )//이것도 마찮가지로 MouseOut 사용한 점을 빼면 전과 같다
    //MouseOut은 마우스가 영역을 벗어날 때 발생.
  }
}

export default R069_onMouseOver;