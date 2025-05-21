import React, { Component } from 'react';

class R033_ReturnMap extends Component {
  render() {
    const element_Array = [
      <li>react</li>
      , <li>200</li>
      , <li>Array map</li>
    ]
      // 변수 element_Array에 순서대로 배열함  <li>를 사용 해  **<li>는 점이 나옴
    return (
      <ul>
        {element_Array.map((array_val) => array_val)}
      </ul>
    )
  }
}   // 출력 element_Array을 <ul>을 사용해 리스트로 만들고 난후 map으로 반복 후 그대로 출력

export default R033_ReturnMap;
    //*에러가 뜨는 이유 key가 없기 떄문에