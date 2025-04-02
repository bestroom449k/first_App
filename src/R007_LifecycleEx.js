import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
    return {tmp_state:props.prop_value};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  componentDidMount() {
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state : '+this.state.tmp_state);
  }

  render() {
    console.log('3. render Call');
    return (
      <h2>[ THIS IS COMPONENTDIDMOUNT FUCNTION ]</h2>
    )
  }
}

export default R007_LifecycleEx;
//1,2,3번의 콘솔은 006번이랑 같고 이코드는 
//componentDidMount()는 컴포넌트가 화면에 나타난 직후 실행되는 생명주기 메서드입니다.
//constructor > getDerivedStateFromProps > render 후 실행됩니다.
// this.state.tmp_state 값이 설정된 후 콘솔에 출력됩니다.
// prop_value=FromApp.js이므로 tmp_state = "FromApp.js"