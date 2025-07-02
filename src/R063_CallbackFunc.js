import React, { Component } from 'react';
class R063_CallbackFunc extends Component {
  componentDidMount() {
    // 콜백 함수에서는 첫 번째 결과(return1)를 받아 출력.
    this.logPrint(1, function(return1) {
    // 첫 번째 logPrint에서 두 배로 만든 결과(return1)를 콘솔에 출력합니다.
      console.log("return1 : " + return1);

      // 두 번째 logPrint 실행: 첫 번째 결과인 return1을 다시 전달하고
      // 또 하나의 콜백 함수를 전달합니다.
      this.logPrint(return1, function(return2) {

        // 두 번째 logPrint에서 만든 결과(return2) 출력.
        console.log("return2 : " + return2); 

      }) // 두 번째 콜백 함수.

    }.bind(this))
    // 위 콜백 함수 안에서 this.logPrint 사용할건데 콜백 함수 안의 this는 원래 다른 것을 가리킵니다.
    // 그래서 현재 컴포넌트(this)를 정확히 가리키도록 강제로 묶음 + (this는 현재 컴포넌트).
  }

  // logPrint 함수는 두 개의 매개변수를 받습니다:
  // param: 숫자, callback: 결과를 처리할 콜백 함수
  logPrint(param, callback) {

    // 현재 logPrint에 전달된 param 값을 콘솔에 출력합니다.
    console.log("logPrint param : " + param);

    // param 값을 두 배 처리 함.
    param += param;

    // 콜백 함수를 실행하면서 두 배로 만든 값을 출력.
    callback(param);
  }
  render() {
    return (
      <h1>Callback Function</h1>
    );
  }
}
export default R063_CallbackFunc;