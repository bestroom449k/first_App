import React, { Component } from 'react';
import axios from "axios";

class R062_AxiosPost extends Component {

  // 이 함수는 컴포넌트가 화면에 나타난 직후에 자동으로 실행
  componentDidMount(){
    // axios.post를 사용해서 서버(http://date.jsontest.com/)에 POST 방식으로 데이터를 보냄
    axios.post('http://date.jsontest.com/', {
      a: "react",   // 보낼 데이터 중 하나 (키: a, 값: "react")
      b: 200        // 보낼 데이터 중 하나 (키: b, 값: 200)
    })
    // 성공시 .then() 안의 코드가 실행
    .then(response => {
      //response에서 response안에 있는 data안에 있는 date를 꺼내서 알림창으로 보여줍니다
      alert(response.data.date);
    })
  }


  render() {
    return (
      <h1>axios post</h1>
    )
  }
}

// 이 컴포넌트를 외부 파일에서 사용할 수 있도록 내보냅니다
export default R062_AxiosPost;
