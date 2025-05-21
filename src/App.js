import React from 'react';
import './App.css';
import FunctionComponent from './R030_FunctionComponent'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <FunctionComponent contents="[THIS IS FuntionCompoent]"/>
    </div>
  );
} //FunctionComponent에 contents값을 props로 보낸다. content에는THIS IS FuntionCompoent가 들어 잇음

export default App;