import React, { Component } from 'react';
import axios from "axios";

class R061_AxiosGet extends Component {

  // 컴포넌트가 화면에 처음 나타났을 때 자동 실행됨
  componentDidMount() {
    // axios를 이용해 GET 방식으로 서버(http://date.jsontest.com/)에 요청
    axios.get('http://date.jsontest.com/')
      // 요청이 성공하면 실행되는 부분
      .then(response => {
        //response 안에 있는 data안에 있는 date 값만 알림창으로 출력
        alert(response.data.date);
      });
  }
  render() {
    return (
      <h1>axios get</h1>
    );
  }
}

// 이 컴포넌트를 외부에서도 쓸 수 있게 내보내기
export default R061_AxiosGet;
