import React, { Component } from 'react';
//constructor에서 props로 전달받은 값을 ref로 지정 [Ref는 referenced의 약자로 참조라는 뜻 element 값을 얻거나 조작할 때 사용]
//constructor에서 super(props) 호출 후 this.InputRef = React.createRef()로 ref 생성
class R073_ReactRef extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
  }
  //+ createRef 함수로 변수 inputRef 생성

  RefFocus = (e) => {
    this.InputRef.current.focus();
  }
  //이벤트 발생시 이 클래스에서 inputRef의 current 속성을 통해 DOM 요소에 접근

  JavascriptFocus() {
    document.getElementById('id').focus(); //focus는 커서를 위치시키는 함수
  }
  //elementId에 ref 속성으로 변수 inputRef 지정 이때 지정한 것의 정보는 ref의 current 속성에 들어있음

  render() {
    return (
      <>
        <input id="id" type="text" ref={this.InputRef} />
        <input type="button" value="Ref Focus" onClick={this.RefFocus}/>
        <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
      </>  
    )
  } //Ref Focus과 Javascript Focus의 차이점은 없다. 주는 방식만 다르다.
  //text는 input에 커서가 위치하게 된다. [커서는 깜빡이는 세로줄]
}

export default R073_ReactRef;