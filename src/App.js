import React from 'react';
import './App.css';
import SetState from './R025_SetState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <SetState/>
    </div>
  );
} //SetState 안에는 버튼 클릭하면 state 값이 바뀌고, 화면도 바뀌는 코드

export default App;
