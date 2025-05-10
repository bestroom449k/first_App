import React from 'react';
import './App.css';
import PropsBoolean from './R019_PropsBoolean'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsBoolean BooleanTrueFalse={false}/>
      <PropsBoolean BooleanTrueFalse/>
    </div>
  ); // <PropsBoolean BooleanTrueFalse={false}/>이것은 거짓이면 거짓으로 올리는 것이다 그리고 만약 <PropsBoolean BooleanTrueFalse/> 이게 없으면 진실이 안 뜸
}

export default App;