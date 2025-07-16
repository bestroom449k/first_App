import React,{Component} from "react";

class R065_Promise extends Component {
  //Promise에는 resolve와 reject가 있다.
  componentDidMount(){
    new Promise((resolve, reject) => {
      reject(new Error ("Error Info"));
    })
    //여기서 Promise를 만들면서 바로 reject 실행시킴 reject가 실행 되면 에러가 발생했다고 선언하는 것 임.
    //reject로 실패 상태로 만들고 Error 객채 사용 해서 Error Info 메세지 전달.
    //+ Error는 자바스크립트에서 기본 제공하는 에러 생성자
    .then(result => console.log("then "+result))
    .catch(result => console.log ("catch:"+result));
    //then은 성공 했을 때 실행 되는 함수 이고 catch는 실패 했을 때 실행되는 함수이다. 둘다 Promise의 값을 받아서 실행됨.
    //then()은 성공인데 여기서는 그런데 지금은 reject()가 호출됐기 때문에 then()은 무시하고 catch() 실행
    //여기서 catch()는 값을 result로 받아서 콘솔에 catch:Error Info를 출력함.
  }
  render(){
  return(
    <h1>Promise</h1>
     )
    }
  }
  export default R065_Promise;
