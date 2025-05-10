import React from 'react';
import './App.css';
import PropsRequired from './R021_PropsRequired'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsRequired ReactNumber={200}/>
    </div>
  );
} // props에 ReactNumber = 200 이라는 숫자를 넣음

export default App;