import React, { useState, useEffect } from 'react';

function R031_ReactHook(props){
  const [contents, setContents] = useState('[ THIS IS REACT ]');
   // const 변수는 처음이 contents 변환된 것이 setContents이다.
  useEffect(() => {
    console.log('useEffect');
  });
    // 콘솔 로그에 useEffect 남기기
  return (
    <div style={{padding: "0px"}}>
      <h2>{contents}</h2>
      <button onClick={() =>setContents('[ THIS IS HOOK ]')}>버튼</button>
    </div>
  )
}
    //버튼 클릭 setContents값을 THIS IS HOOK로 변환
export default R031_ReactHook;

/* class 형태로 작성시
class R031_ReactHook extends Component {
    ---------------------------------
  constructor(props) {
    super(props);     ----->> 이게  useState이것으로 되는 것임
    this.state = {
      ---------------------------------
      contents: '[ THIS IS REACT ]'     
    };
  }

 componentDidMont() {
    console.log('useEffect'); // useEffect와 같은 역할
  }
*/
