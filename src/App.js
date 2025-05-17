import React from 'react';
import './App.css';
import ForceUpdate from './R026_ForceUpdate'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ForceUpdate/>
    </div>
  );
} //<ForceUpdate이것이SetState와 다른 저은 setState() 없이도 React 컴포넌트를 강제로 리렌더링 함

export default App;