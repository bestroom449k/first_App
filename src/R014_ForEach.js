import React, { Component } from 'react';

class R014_ForEach extends Component {

  componentDidMount() {
    var Es5_Arr = [ 3, 2, 8, 8 ]
    var Es5_newArr = []
    
    for (var i = 0; i < Es5_Arr.length; i++) {
      Es5_newArr.push(Es5_Arr[i])
    }
    console.log("1. Es5_newArr : ["+Es5_newArr+"]")

    var Es6_Arr = [ 3, 3, 9, 8 ]
    var Es6_newArr = []
    Es6_Arr.forEach((result) => {
      Es6_newArr.push(result)
    })
    console.log("2. Es6_newArr : ["+Es6_newArr+"]")
  }

  render() {
    return (
      <h2>[ THIS IS ForEach ]</h2>
    )
  }
}

export default R014_ForEach;
/*ForEach는 {}안에 있는 것을 반복함 숫자와 상관없이 {1,2,3,3,1}같은 경우는 {1},{1,2}이런 식으로 5번 반복함 
반복하는 과정을 알고 십으면  Es6_Arr.forEach((result) => {
      Es6_newArr.push(result)
    }) 여기에 로그를 작성 하면 변하는 과정이 나타난 다. */