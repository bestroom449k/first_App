import React from 'react';
import './App.css';
import PropsDatatype from './R018_PropsDatatype'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDatatype 
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", twohundred:"200"}}
        Function={console.log("FunctionProps: function!")}
      />
    </div>
  );
} //props에 들에 값을 집어 넣고 

export default App;