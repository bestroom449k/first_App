import React from 'react';
import './App.css';
import Props from './R017_Props'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <Props props_val="THIS IS PROPS"/>
    </div>
  );  // Props에 props_val을 만들고 THIS IS PROPS넘
}

export default App;