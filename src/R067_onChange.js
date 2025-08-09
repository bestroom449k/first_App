import React, {Component} from "react";

class R067_onChange extends Component{
  change = (e)=>{
    var val = e.target.value;
    console.log('param :' + val);
  } //change함수를 선언 하고 이벤트 발생시 console에 출력한다.
  //이벤트 변수 인 e에 target 속성을 사용하여 input의 값을 가져옴
  // target은 이벤트가 발생한 요소를 가리킴 이것은 여기서는 value를 나타냄
  render() {
    return (
      <>
      <input type="text" onChange={this.change} />
      <select onChange={this.change}>
        <option value="react">react </option>
        <option value="200">200 </option>
      </select>
    </>
    );//input 태그와 select 태그의 onChange 이벤트에 change 함수를 연결함.
  }//input 박스에 입력 하거나 삭제 할때 마다 이벤트 발생 그래서 console에 그 값 출력
  //함수 호출시 따로 피라미터를 전달 하지 않아도 이벤트 객체가 자동으로 전달
}
export default R067_onChange;