import React from 'react';
import './App.css';
import Fragments from './R032_Fragments'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <Fragments/>
    </div>
  );
}  // compont 단워로 element를 할때<html>로 전채를 감싸지 않으면 에러가 생긴다고 한다. 그떄 <Fragents>로 감싸면 그렇 필요가 없어 진다.
  // 여기서 말하는 element는 태그로 감싸는 것을 만한다. 

export default App;