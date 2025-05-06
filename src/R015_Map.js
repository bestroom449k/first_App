import React, { Component } from 'react';

class R015_Map extends Component {

  componentDidMount() {
    var Map_Arr = [ 3, 2, 8, 8 ]
    let Map_newArr = Map_Arr.map(x => x)
    console.log("1. Map_newArr : ["+Map_newArr+"]")

    let Map_mulitiArr = Map_Arr.map(x => x * 2)
    console.log("2. Map_mulitiArr : ["+Map_mulitiArr+"]")

    var ObjArray = [{key:'react', value:'200'},
                    {key:'리액트', value:'TwoHundred'}];
    let Map_objArr = ObjArray.map((obj, index) => {
      console.log((index+3)+". obj : "+JSON.stringify(obj))
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log("5. Map_objArr : "+JSON.stringify(Map_objArr))
  }

  render() {
    return (
      <h2>[ THIS IS Map ]</h2>
    )
  }
}

export default R015_Map;
/*여기서 나머지는 이전가 비슷한데 1번은 그데로 2번은 2배 해서 콘솔을 한다 13~20줄은 먼저
 ObjArray = [{key:'react', value:'200'},--1번이라고 함
           {key:'리액트', value:'TwoHundred'}--2번 이라고함 을 저장한후  
 let Map_objArr = ObjArray.map((obj, index) =>  어렇게 함수를 다시 세로 만든후
 console.log((index+3)+". obj : "+JSON.stringify(obj)) 출력 하는데 
 ----------------------------------------------
 index는 번호를 나타낸다 처음에는 0,1 이런 식으로 +3을 했으니 3,4 로출력  obj, index index가 0번일 때 1번 출력 1번일때 2번 출력이됨
 -----------------------------------------------------------------------------
      var Obj = {};
      Obj[obj.key] = obj.value;
   return Obj; 이거는 위에서 나온 출력 값을 모은 후 저장함 그리고 
   5. 출력 떄쓰임*/