import React, { Component } from 'react';

class R060_FetchPost extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com/', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },  // POST로 서버에 보내기 application/json은 언어라고 알려주기
      body: { a:"react", b:200 },
    }); // a:"react", b:200 라고 보내기
    const body = await response.json();
    alert(body.date)
  } //body.date 알림 
  // a,b는 출력 안됨

  render() {
    return (
        <h1>fetch post</h1>
    )
  }
}

export default R060_FetchPost;
