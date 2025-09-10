import React, { Component } from 'react';

class R074_ReactCurrying extends Component {

  // 숫자나 문자열을 더하거나 이어붙이는 함수 사용
  plusNumOrString(c, d){
    return c + d;
  }
  // a를 먼저 받고
  // 나중에 b를 받아서 a와 b를 더함
  //this를 사용 함으로 .bind(this)로 this를 고정함
  PlusFunc1(a){
    return function(b){
      return this.plusNumOrString(a, b)
    }.bind(this)
  }

  // PlusFunc2는 같은 동작을 화살표 함수로 간단히 표현한 버전
  // 화살표 함수는 this를 별도로 바인딩하지 않아도 됨
  //목표는 PlusFunc1과 동일
  PlusFunc2 = a => b => this.plusNumOrString(a, b)

  // PlusFunc: 항상 두 번째 값인 a에 200을 넣어서 불르는 함수
  PlusFunc(a){
    return this.PlusFunc1(a)(200)
  }

  render() {
    return (
      <>
        
        <input type="button" value="NumberPlus" onClick={e => alert(this.PlusFunc(100))}/>

        
        <input type="button" value="StringPlus" 
        onClick={e => alert(this.PlusFunc("react"))}/>
      </>  
    )
  }
}// NumberPlus 버튼: PlusFunc(100) 호출 → 100 + 200 = 300 
// StringPlus 버튼: PlusFunc('react') 호출 → 'react' + 200 = 'react200' 
export default R074_ReactCurrying;