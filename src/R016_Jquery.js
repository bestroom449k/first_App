import React, { Component } from 'react';
import $ from 'jquery'; //jquery 불러옴

class R016_Jquery extends Component {   //클래스 생성

  input_alert = (e) => {  //input_alert이라는 함수만든 후 그곳에 input_val이라는 변수를 만든후 jquery로 html을 선택후 넣음  
    var input_val = $('#inputId').val();
    alert(input_val);   //팝업에 iㄴㄴnput_val에 들어 간 값 띠우기
  }

  render() {
    return (
      <div>
        <h2>[ THIS IS Jquery ]</h2>
        <input id="inputId" name="inputName"/>
        <button id="buttonId" onClick={e => this.input_alert(e)}>Jquery Button</button>
      </div>
    )/* inputId에 있는내용을 서버에서 inputName에 inputId값을 올림
    버튼 클릭 시이벤트 한수 설정 하고 이벤트 실행시 input_alert 함수 실행 */
  }
}

export default R016_Jquery;
/*
('#inputId')는 jQuery로 HTML 코드를 선택하는 거며
.val()은 그 안에 써 있는 걸 가져오는 거다	
#는 id를 의미한다*/