import React from 'react';
import './App.css'; 
import LifecycleEx from './R006_LifecycleEx'; 

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <LifecycleEx 
      prop_value='FromApp.js' /> 
    </div>
  );
}

export default App;

// R006_LifecycleEx파일을 불러와 LifecycleEx로 장하고 이것을 내보낸다.
//<LifecycleEx prop_value=FromApp.js />는 LifecycleEx 컴포넌트를 사용하고 prop_value 값을 전달합니다.
//prop_value='FromApp.js'  R006_LifecycleEx 컴포넌트에서 이 값을 받아서 사용할 수 있습니다.

