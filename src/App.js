import React from 'react';
import './App.css';
import ReactState from './R024_ReactState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactState reactString={"react"}/>
    </div>
  );
} //reactString라는 변수에 "react를 넣고 props에 담김 부를 떈 state로 받음

export default App;