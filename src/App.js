import React from 'react';
import './App.css';
import LifecycleEx from './R007_LifecycleEx'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx
        prop_value = 'FromApp.js'
      />
    </div>
  );
}

export default App;
/*예기에 div는 public/index.html의 <div id="root"> 안에 들어감
그리고 LifecycleEx prop_value="FromApp.js이걸료 LifecycleEx에 prop_value이름으로 전달함 */