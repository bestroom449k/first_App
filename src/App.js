import React from 'react';
import './App.css';
import PropsNode from './R023_PropsNode'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}   //<span> </span>안에 있는 것은 저절로 props로 받음 그리고 받을 땐 props.children로 받음

export default App;
