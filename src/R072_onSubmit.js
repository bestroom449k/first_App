import React, { Component } from 'react';

class R072_onSubmit extends Component {

  Submit(e) {
    /*document.getElementById를 이용해 input 박스의 value를 가져옴
     [document.getElementById은 웹 페이지에서 특정 ID를 가진 요소를 찾아 반환하는 JavaScript메서드이다]
   [ 여기서 document는 웹 페이지의 HTML 문서 전체를 나타내는 객체이다.]
   getElementById()는 document의 메서드로, 인수로 전달된 ID 값을 가진 HTML로 변환 한다.*/
    var inputValue = document.getElementById("inputId").value;
    // 콘솔창에 입력 값을 출력
    console.log("inputValue : " + inputValue);

    // Submit dlgndml 페이지 새로고침 방지
    e.preventDefault();
  }


  render() {
    return (
      // <form> 태그에 onSubmit 이벤트 연결
      // => submit 버튼을 누르거나 엔터를 입력하면 this.Submit 실행

      
      <form onSubmit={this.Submit}>
        <input type="text" name="inputName" id="inputId"/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
/* 텍스트 입력창에 이름은 inputName, id는 inputId로 설정 */
/* id가 있어서 위의 document.getElementById("inputId")로 접근 가능 */

export default R072_onSubmit;
