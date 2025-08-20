import React, { Component } from 'react';

class R071_OnKey extends Component {
  OnKey(event, e) {
    var val = e.target.value;
    console.log('event : '+event+", value: "+val);
  }
  /*OnKey 메서드를 불른 후 이벤트 객채 e로 값을 가져옵니다.
   var val = e.target.value; 이걸로 값을 가져오고, target는 값의 type을 알수 있습니다..
  그리고 콘솔로 어떤 이벤트가 무엇을 발생했는지 알 수 있습니다.*/
  render() {
    return (
      <>
        onKeyDown : <input type="text" onKeyDown={e => this.OnKey("onKeyDown", e)}/><br/>
        onKeyPress : <input type="text" onKeyPress={e => this.OnKey("onKeyPress", e)}/><br/>
        onKeyUp : <input type="text" onKeyUp={e => this.OnKey("onKeyUp", e)}/>
      </>
    )
  }
  /*onKeyDown이겄은 키를 눌렸는지 감지해서 발생하는 이벤트입니다.    이것들은 OnKey에 이벤트 이름과 e를 넘겨줍니다.
   onKeyPress는 키를 누르고 있는 동안 발생하는 이벤트입니다.
   onKeyUp은 키를 뗐것을 감지해서 발생하는 이벤트입니다.*/
}

export default R071_OnKey;