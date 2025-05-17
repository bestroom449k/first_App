import React from 'react';
import './App.css';
import PureComponentClass from './R028_PureComponentClass'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PureComponentClass/>
    </div>
  );
} //PureComponent는 state나 props가 바뀌었을 때만 render()를 실행 
//일반 Component 차이점	PureComponent
//setState() 호출 시	Component 무조건 render() PureComponent 다시 실행	값이 같으면 render() 안 함

export default App;
