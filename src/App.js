import React from 'react';
import './App.css'; 
import LifecycleEx from'./R004_LifecycleEx'

function App () {
  return (
    <div>
      <h1>Start React 200! </h1>
      <p>HTML 적용하기 </p>
      <LifecycleEx></LifecycleEx>
    </div>
  )
}

export default App;
// R004_LifecycleEx파일을 불러와 LifecycleEx로 장하고 이것을 내보낸다.
// 나머지는 chapter 3랑 비슷함 
//@testing-library/react를 사용하여 React 컴포넌트를 테스트할 수 있지만 필 수는 아니기 때문에 지움