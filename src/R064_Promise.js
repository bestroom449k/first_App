import React, { Component } from 'react';
class R064_Promise extends Component {
  //Promise 에는 대기, 이행 거부의 세 가지 상태가 있다.
  // 대기 상태는 비동기 작업이 아직 완료 되지 않은 상태이다.
  // 이행 상태는 비동기 작업이 성공적으로 완료한 상태미며, 거부 상태는 비동기를 실패한 상태이다.
  componentDidMount(){
    new Promise(resolve => {
      setTimeout(function() {
        resolve('react');
      }, 1500);
      // 성공하면 resolve 호출 // 실패하면 reject 호출
      //여기서는 Promiser가 대기 상태로 시작 하여 1.5초 후에 resolve(성공하면)resolve('react')를 호출.
    })
    .then(function(result) {
      console.log(result);
      return result + 200;
    })
    //.then이 상용 됨것으로 보면 여기서 Promise가 이행 상태로 변경됨
    //.then이 나왔으니 그전에 값은 성공했다는 을 알수 있음 그전의 값은 'react'이며 그것을 함수 result로 받음.
    // 콘솔에 result 출력하고 200더함.
    .then(result => {
      console.log(result);
    })
  }// 여기서의 .then은 이전의 .then에서 값을 받음 그 받은 값'react200을 result을 콘솔에 출력

  render() {
    return (
        <h1>Promise</h1>
    )
  }
}

export default R064_Promise;