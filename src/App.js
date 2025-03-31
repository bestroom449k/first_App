import React from 'react';

function App () {
  return (
    <div>
      <h1>Start React 200! </h1>
      <p>HTML 적용하기 </p>
    </div>
  )
}

export default App;
// index.js 파일이 App.js 파일을 불어온다. App.js 파일은 HTML을 뿌린다. index.js 파일은 reportWebVitals과 react-dom에서client파일을 불러농다.
// chapter 1에서는 아직 .css는 없어도 작동함
//reportWebVitals은이 파일은 Web Vitals 데이터를 수집하고, 이를 콘솔에 출력하거나 분석 도구(예: Google Analytics) 로 전송하는 데 사용됩니다.[있어야함]
//react-dom/client는 React 18부터 도입된 새로운 렌더링 API를 제공하는 모듈입니다.[있어야함]